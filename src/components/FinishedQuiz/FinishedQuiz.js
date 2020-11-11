import React from 'react';
import classes from './FinishedQuiz.module.css';
import thumbsUp from '../../img/hand-1.svg';
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";

const propTypes = {
    checkpoint: PropTypes.string.isRequired,
    onRetry: PropTypes.func.isRequired
}

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

FinishedQuiz.propTypes = propTypes;

export default FinishedQuiz;