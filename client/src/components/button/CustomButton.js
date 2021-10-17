import React from "react";

import Button from '@mui/material/Button';

const style = {
    margin: 5
};


const CustomButton = ({
    color,
    label,
    variant,
    onClick,
    disabled
}) => {

    return (
        <Button
            color={color}
            onClick={onClick}
            variant={variant}
            style={style}
            disabled={disabled}
        >
            {label}
        </Button>
    );
}

export default CustomButton;