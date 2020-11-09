import React from 'react';
import classes from './FinishedQuiz.module.css';
import thumbsUp from '../../img/hand-1.svg';
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const {checkpoint, onRetry} = props;
    return (
        <div className={classes.FinishedQuiz}>
            <div className="imgWrapper">
                <img className={classes.thumbsUp} src={thumbsUp} alt="Screenshot"/>
            </div>
            <div className={classes.totalScore}>
                <h2>Total score:</h2>
                <div className="earned">${checkpoint} earned</div>
                <Button onClick={onRetry}>
                    Try again
                </Button>
            </div>
        </div>
    );
};

export default FinishedQuiz;