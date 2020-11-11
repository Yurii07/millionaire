import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";
import Loading from "../UI/Loading/Loading";
import PropTypes from "prop-types";

const propTypes = {
    loading: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    state: PropTypes.any,
    onAnswerClick: PropTypes.func,
}

const ActiveQuiz = (props) => {

    const {loading, question, state, answers, onAnswerClick} = props;

    return (
        <div className={classes.ActiveQuiz}>
            {loading && <Loading/>}
            <p className={classes.Question}>
            <span className={classes.question}>
                {question}
            </span>
            </p>
            <AnswersList
                state={state}
                answers={answers}
                onAnswerClick={onAnswerClick}
            />
        </div>
    )
};

ActiveQuiz.propTypes = propTypes;

export default ActiveQuiz;