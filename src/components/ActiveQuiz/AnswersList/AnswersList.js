import React, {Component} from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";
import PropTypes from "prop-types"

const AnswersList = (props) => (
    <div className={classes.AnswersList}>

        {props.answers.map((answer,index)=> {
            return(
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </div>
);

AnswersList.propTypes = {
    answers: PropTypes.array.isRequired,
}

export default AnswersList;