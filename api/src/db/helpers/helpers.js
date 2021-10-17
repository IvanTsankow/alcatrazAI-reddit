
const User = require('./../models/user');
const Thread = require('./../models/thread');
const Comment = require('./../models/comment');
const hashPassword = require('./hash-password');

const findUser = async ({ username }) => {
    try {
        return await User.findOne({ username });
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (data) => {
    try {
        const foundUser = await findUser(data);
        if (foundUser) {
            return {
                statusCode: 404,
                body: "This user is already registered"
            }
        }

        const user = new User(data);
        const result = await user.save();
        return {
            statusCode: 200,
            body: result.username,
        };
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (data) => {
    try {
        const foundUser = await findUser(data);
        if (!foundUser) {
            return {
                statusCode: 404,
                body: "User does not exist",
            }
        }

        const passwordHash = await hashPassword(data.password);
        if (foundUser.password !== passwordHash) {
            return {
                statusCode: 404,
                body: "Wrong credentials"
            }
        }

        return {
            statusCode: 201,
            body: foundUser.username,
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: error.message,
        }
    }

}

const addThread = async (data) => {
    try {
        const thread = new Thread(data);
        const {
            name,
            comments_total,
            likes,
            dislikes,
            members,
        } = await thread.save();

        return {
            statusCode: 200,
            body: {
                name,
                comments_total,
                likes,
                dislikes,
                members,
            },
        };
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const getAllThreads = async () => {
    try {
        const threads = await Thread.find({});
        return {
            statusCode: 200,
            body: threads,
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const getOneThread = async (id) => {
    try {
        const thread = await Thread.findOne({_id: id});

        return {
            statusCode: 200,
            body: thread,
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const updateThreadById = async (id, data) => {
    try {
        const thread = await Thread.findOneAndUpdate(id, data);

        return {
            statusCode: 204,
            body: "Resource updated successfully"
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const addComment = async (id, comment) => {
    try {
        const newComment = new Comment({...comment, thread_id: id });
        const result = await newComment.save();

        return {
            statusCode: 204,
            body: result,
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const getThreadComments = async (id) => {
    try {
        const comments = await Comment.find({thread_id: id});
        
        return {
            statusCode: 200,
            body: comments,
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

const updateCommentById = async(id, data) => {
    try {
        const comment = await Comment.findOneAndUpdate({_id: id}, data);
        
        return {
            statusCode: 204,
            body: comment,
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: error.message,
        }
    }
}

module.exports = {
    loginUser,
    createUser,
    addThread,
    getAllThreads,
    getOneThread,
    updateThreadById,
    addComment,
    getThreadComments,
    updateCommentById,
}