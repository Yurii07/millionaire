import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {

    renderLinks() {
        return this.props.quizData.slice(0).reverse().map((items, index) =>
            <li key={index}>
                $ {items.money}
            </li>
        );
    }

    render() {

        console.log(this.props.quizData,'this.props.quizDataDrawer');

        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}

export default Drawer