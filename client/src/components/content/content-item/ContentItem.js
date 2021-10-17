import React from "react";

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import CustomButton from "../../button/CustomButton";
import { withRouter } from "react-router-dom";


const ContentItem = ({
    sx,
    component,
    scope,
    align,
    history,
    data,
    labels,
}) => {

    const openPage = () => {
        history.push(`/r/${data._id}`);
    };

    return (
        <TableRow
            sx={sx}
        >
            {data && <TableCell component={component} scope={scope} >
                <CustomButton onClick={openPage} variant={"text"} label={data.name} />
            </TableCell>}
            {labels && labels.map((label, i) => (
                <TableCell key={i} align={align}>{data ? data[label] : label}</TableCell>
            ))}
        </TableRow>
    );
};

export default withRouter(ContentItem);