import React from 'react';
import classes from  './AnswerItem.module.css';
import cn from 'classnames';

const AnswerItem = (props) => {

    const {answer: {id, text}, state, onAnswerClick} = props;

    const cls = cn(
        classes.AnswerItem, {
            [classes.correct] : state === 'correct',
            [classes.wrong] : state === 'wrong'
        })

    return (
        <div className={cls}
             onClick={() => {
                 onAnswerClick(id)
             }}>
            {text}
        </div>
    );
};

export default AnswerItem;