import React from 'react';
import classes from './FinishedQuiz.module.css';
import thumbsUp from '../../img/hand-1.svg';
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    return (
        <div className={classes.FinishedQuiz}>

            <div className="imgWrapper">
            <img src={thumbsUp} alt="Screenshot"/>
            </div>

            <div className="totalScore">
                <h2>Total score:</h2>
                <div className="earned">$8,000 earned</div>
                <Button onClick={props.onRetry} type="primary">Try again</Button>

            </div>

        </div>
    );
};

export default FinishedQuiz;