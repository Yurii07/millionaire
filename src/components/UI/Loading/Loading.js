import React from 'react';
import LoadingImg from "../../../img/loader.svg";
import classes from "./Loading.module.css"

const Loading = () => {
    return (
        <div>
            <img src={LoadingImg} className={classes.Loading} alt="Loading"/>
{}
        </div>

    );
};

export default Loading;