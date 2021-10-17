import React, { useContext, useState } from "react";

import CustomTextField from "../../textfield/CustomTextField";
import CustomButton from "../../button/CustomButton";
import UserContext from "../../../providers/UserContext";
import { BASE_URL } from "../../../common/constants";

const Comment = ({thread, setThread}) => {

    const {user} = useContext(UserContext);

    const [comment, setComment] = useState("");

    const handleChange = ({target}) => {
        setComment(target.value)
        handleSubmitButton();
    };
    const [disabled, setDisabled] = useState(true);

    const handleSubmitButton = () => {
        if (3 <= comment.length) {
            setDisabled(false);
            return;
        }
        setDisabled(true);
    };


    const submitComment = () => {
        const newComment = {
            author: user,
            body: comment,
            likes: 0,
            dislikes: 0,
            thread_id: thread._id
        };

        fetch(`${BASE_URL}/r/${thread._id}/comments`, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            }})
            .catch(error => console.log(error))


        
        setThread({...thread, comments: [...thread.comments, newComment]})
    };


    return (
        <>
            <CustomTextField
                id={"outlined-comment-input"}
                label={"Comment"}
                type={"text"}
                onChange={handleChange}
                helperText={"minimum 3 symbols"}

            />
            <CustomButton
                variant={"outlined"}
                onClick={submitComment}
                label={"ADD COMMENT"}
                disabled={disabled}
            />
        </>
    );
};

export default Comment;