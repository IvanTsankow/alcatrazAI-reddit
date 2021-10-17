
const { addThread, getAllThreads, getOneThread, updateThreadById, addComment, getThreadComments, updateCommentById } = require('./../db/helpers/helpers');

const listContent = async (ctx) => {
    const { body, statusCode } = await getAllThreads();
    ctx.body = body;
    ctx.status = statusCode;
}

const createThread = async (ctx) => {
    const thread = ctx.request.body;
    const { body, statusCode } = await addThread(thread);
    ctx.body = body;
    ctx.status = statusCode;
}

const postComment = async (ctx) => {
    const comment = ctx.request.body;
    const id = ctx.params.id

    const { body, statusCode } = await addComment(id, comment);

    ctx.body = body;
    ctx.status = statusCode;
}

const getThread = async (ctx) => {
    const id = ctx.params.id;
    const { body, statusCode } = await getOneThread(id);
    const result = await getThreadComments(id);
    ctx.body = { ...body._doc, comments: result.body };
    ctx.status = statusCode;
}

const updateThread = async (ctx) => {
    const id = ctx.params.id;
    const data = ctx.request.body;
    const { body, statusCode } = await updateThreadById(id, data);
    ctx.body = body;
    ctx.status = statusCode;
}

const updateComment = async (ctx) => {
    const commentId = ctx.params.commentId;
    const { body, statusCode } = await updateCommentById(commentId);
}

module.exports = {
    listContent,
    createThread,
    postComment,
    getThread,
    updateThread,
    updateComment,
};
