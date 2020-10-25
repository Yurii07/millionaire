import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";
import Loading from "../UI/Loading/Loading";

const ActiveQuiz = (props) => {

    const {answerNumber, question, quizLength, state, answers, onAnswerClick, onLoad} = props;

    return (
        <div className={classes.ActiveQuiz}>
            {props.loading && <Loading >

            </Loading>}


            <p className={classes.Question}>
            <span className={classes.question}>
                {/*<strong>{answerNumber}. </strong>*/}
                {question}
            </span>
                {/*<small>{answerNumber} из {quizLength}</small>*/}
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