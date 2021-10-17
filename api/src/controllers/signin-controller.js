const {createUser, loginUser} = require('./../db/helpers/helpers')

const login  = async (ctx) => {
    const user = ctx.request.body;
    console.log(user)
    const {statusCode, body } = await loginUser(user);
    console.log(body)
    ctx.body = body;
    ctx.status = statusCode;
}

const signUp = async (ctx) => {
    const user = ctx.request.body;
    const {body, statusCode} = await createUser(user);
    ctx.body = body;
    ctx.status = statusCode;
}

module.exports = {
    login,
    signUp,
};