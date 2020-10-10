import React from 'react';
import classes from './FinishedQuiz.module.css';
import thumbsUp from '../../img/hand-1.svg';
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    return (
        <div className={classes.FinishedQuiz}>

            <div className="imgWrapper">
                <img className={classes.thumbsUp} src={thumbsUp} alt="Screenshot"/>
            </div>

            <div className={classes.totalScore}>
                <h2>Total score:</h2>
                <div className="earned">${props.checkpoint} earned</div>
                <button className="Button"
                        onClick={props.onRetry}>
                    Try again
                </button>

            </div>

        </div>
    );
};

export default FinishedQuiz;