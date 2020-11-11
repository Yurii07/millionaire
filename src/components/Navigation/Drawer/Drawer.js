import React, {Component} from 'react'
import classes from './Drawer.module.css'
// import Backdrop from "../../UI/Backdrop/Backdrop";
import cn from 'classnames';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {activeQuestion: 0};
    }

    renderLinks() {
        return this.props.quizData.map((items, index) =>
            <li className={this.getMoneyCssClasses(index, items)} key={index}>
                $ {items.money}
            </li>
        );
    }

    getMoneyCssClasses(index, items) {
        return (this.props.activeQuiz === index ? classes.active : '')
            ||
            (items.prevQuiz ? classes.unactive : '');
    }

    render() {

        const cls = cn(
            [classes.Drawer], {
                [classes.close]: !this.props.isOpen
            }
        )

        return (
            <>
                <nav className={cls}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {/*{this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}*/}
            </>
        )
    }
}

export default Drawer