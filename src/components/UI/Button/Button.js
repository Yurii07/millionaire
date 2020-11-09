import React from 'react';
// import classes from './Button.module.css';

const Button = (props) => {
    const {onClick, disabled, children} = props;
    // const cls = [
    //     classes.Button,
    //     classes[props.type]
    // ]
    return (
        <button
            onClick={onClick}
            // className={cls.join(' ')}
            className={"Button"}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;