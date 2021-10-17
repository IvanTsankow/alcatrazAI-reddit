import React from "react";

import TextField from '@mui/material/TextField';

const style = {
    display: "block",
    margin: 10
};

const CustomTextField = ({
    id,
    label,
    type,
    onChange,
    helperText,
}) => {

    return (
        <TextField
            id={id}
            label={label}
            type={type}
            style={style}
            onChange={onChange}
            helperText={helperText}
        />
    );
};

export default CustomTextField;