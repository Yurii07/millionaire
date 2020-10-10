import React from 'react';
import classes from './StartQuiz.module.css'
import thumbsUp from '../../img/hand-1.svg';

const StartQuiz = (props) => {

    return (
        <div className={classes.StartQuiz}>
            <div className={classes.imgWrapper}>
                <img className={classes.thumbsUp} src={thumbsUp} alt="thumbsUp"/>
            </div>
            <div className={classes.startWrapper}>
                <h1 className={classes.headline}>Who wants to be<br/> a millionaire?</h1>

                <button
                    className="Button"
                    onClick={props.onClick}>Start
                </button>
            </div>

        </div>
    );
};

export default StartQuiz;