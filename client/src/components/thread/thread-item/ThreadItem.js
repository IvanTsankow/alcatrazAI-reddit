import React from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { BASE_URL } from '../../../common/constants';


const ThreadItem = ({thread, setThread}) => {

    const comments = thread.comments;

    const handleDislike = (id, threadId, dislikes) => {
        const newDislikes = {dislikes: dislikes + 1};
        fetch(`${BASE_URL}/r/${threadId}/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newDislikes),
            headers: {
                'Content-Type': 'application/json'
            }})
            .catch(error => console.log(error))

            const newComment = comments.find(comment => comment._id === id);
            newComment.dislikes += 1

            const newComments = comments.map(comment => {
                if (comment._id === id) {
                    return newComment;
                }
    
                return comment;
            })
    
            setThread({...thread, comments: newComments});
    }

    const handleLike = (id, threadId, likes) => {
        const newLikes = {likes: likes + 1};
        fetch(`${BASE_URL}/r/${threadId}/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newLikes),
            headers: {
                'Content-Type': 'application/json'
            }})
            .catch(error => console.log(error))

        const newComment = comments.find(comment => comment._id === id);
        newComment.likes += 1;

        const newComments = comments.map(comment => {
            if (comment._id === id) {
                return newComment;
            }

            return comment;
        })

        setThread({...thread, comments: newComments});
    }

    return (
        <>
        {comments.map((comment, i) => (
            <Card key={i} variant="outlined">
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {comment.author} : {comment.body}
                </Typography>
                <Button startIcon={<ThumbUpAltIcon/>} onClick={() => handleLike(comment._id, comment.thread_id, comment.likes)}/>
                {comment.likes}
                <Button startIcon={<ThumbDownAltIcon/>} onClick={() => handleDislike(comment._id, comment.thread_id, comment.dislikes)}/>
                {comment.dislikes}
            </Card>
        ))}
        </>
    );
};

export default ThreadItem;