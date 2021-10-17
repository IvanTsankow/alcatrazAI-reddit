import React from "react";

import Typography from '@mui/material/Typography';


const Heading = ({
    label,
    variant,
    component,
    sx,
}) => {

    return (
        <Typography variant={variant} component={component} sx={sx} >
            {label}
        </Typography>
    );
};

export default Heading;