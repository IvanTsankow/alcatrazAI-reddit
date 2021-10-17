import React from "react";
import { withRouter} from "react-router-dom";


import Heading from "../heading/Heading";
import CustomButton from "../button/CustomButton";


const NotFound = ({
    history,

}) => {

    const handleClick = () => {
        history.push(`/home`);
    };

    return (
        <>
        <Heading variant={"h1"} component={"div"} sx={{ flexGrow: 1 }} label={"404"}/>
        <Heading variant={"h3"} component={"div"} sx={{ flexGrow: 1 }} label={"RESOURCE NOT FOUND"}/>
        <CustomButton
            variant={"outlined"}
            onClick={handleClick}
            label={"BACK TO HOME"}
        />
        </>
    );

};

export default withRouter(NotFound);