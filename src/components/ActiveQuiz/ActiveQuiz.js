import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";
import Loading from "../UI/Loading/Loading";

const ActiveQuiz = (props) => {

    const {question, state, answers, onAnswerClick,loading} = props;

    return (
        <div className={classes.ActiveQuiz}>
            {loading && <Loading />}
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

export default ActiveQuiz;