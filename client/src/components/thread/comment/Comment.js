import React, { useState } from "react";

import CustomTextField from "../../textfield/CustomTextField";
import CustomButton from "../../button/CustomButton";

const Comment = ({thread, setThread}) => {

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


    const submitComment = ({target}) => {
        const newComment = {
            user: "", //user,
            body: comment,
            likes: 0,
        };
        
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