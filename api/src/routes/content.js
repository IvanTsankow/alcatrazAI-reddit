const Router = require('koa-router');
const {
    listContent,
    createThread,
    postComment,
    getThread,
    updateThread,
    updateComment,
} = require("../controllers/content-controllers")

const router = new Router({
    prefix: '/r'
});

    router
        .get('/:id', getThread)
        .get('/', listContent)
        .post('/:id', postComment)
        .put('/:id/:commentId', updateComment)
        .put('/:id', updateThread)
        .post('/', createThread)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};