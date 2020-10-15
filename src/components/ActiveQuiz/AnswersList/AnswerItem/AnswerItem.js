import React, {useState} from 'react';
import classes from './AnswerItem.module.css';
import Background from '../../../../img/button-inactive.png';
import Backgroundorange from '../../../../img/buton-hover.png';

const sectionStyle = {
    width: "373px",
    height: "72px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    outline: 'none'
};
const sectionStyle2 = {
    width: "374px",
    height: "72px",
    backgroundImage: `url(${Backgroundorange})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    outline: 'none'
};
const AnswerItem = (props) => {
    const cls = [classes.AnswerItem]
    const [isShow,setIsShown] = useState(false)

    if (props.state) {
        cls.push(classes[props.state])
    }
    return (

            <button className={cls.join(' ')}
                onClick={() => {props.onAnswerClick(props.answer.id) } }
                onMouseEnter={()=>setIsShown(true)}
                onMouseLeave={()=>setIsShown(false)}
        >
                {isShow ?
                    <div  style={sectionStyle2}>{props.answer.text}</div> :
                    <div style={sectionStyle}>{props.answer.text}</div>
                }

        </button>
    );
};

export default AnswerItem;