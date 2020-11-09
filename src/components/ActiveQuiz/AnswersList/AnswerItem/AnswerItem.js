import React from 'react';
import './AnswerItem.css';
import classNames from 'classnames';

const AnswerItem = (props) => {

    const cls = classNames('AnswerItem', {
        'correct': props.state === 'correct',
        'wrong': props.state === 'wrong'
    })

    return (
        <div className={cls}
             onClick={() => {
                 props.onAnswerClick(props.answer.id)
             }}>
            {props.answer.text}
        </div>
    );
};

export default AnswerItem;