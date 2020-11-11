import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";
import PropTypes from "prop-types"

const propTypes = {
    answers: PropTypes.array.isRequired,
}

const AnswersList = (props) => {
    const {onAnswerClick,state} = props;

    return (
        <div className={classes.AnswersList}>

            {props.answers.map((answer,index)=> {
                return(
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={onAnswerClick}
                        state={state ? state[answer.id] : null}
                    />
                )
            })}
        </div>
    )
};

AnswersList.propTypes = propTypes;

export default AnswersList;