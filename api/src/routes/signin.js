const Router = require('koa-router');
const {
    login,
    signUp,
} = require("../controllers/signin-controller")

const router = new Router({
    prefix: "/user"
});

    router
        .post('/login', login)
        .post('/signup', signUp)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};