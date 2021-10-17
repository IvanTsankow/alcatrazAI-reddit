import React from "react";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button } from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


const ThreadItem = ({comments}) => {

    const handleClick = () => {
        //fetch
    }

    return (
        <>
        {comments.map(comment => (
            <Card key={comment.body} variant="outlined">
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {comment.user} : {comment.body}
                </Typography>
                <Button startIcon={<ThumbUpAltIcon/>} onClick={handleClick}/>
                {comment.likes}
                <Button startIcon={<ThumbDownAltIcon/>} onClick={handleClick}/>
                {comment.dislikes}
            </Card>
        ))}
        </>
    );
};

export default ThreadItem;