import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    '$500', '$1000', '$2000'
]

class Drawer extends Component {

    renderLinks() {
        return links.slice(0).reverse().map((link, index) => {
            return (
                <li key={index}>
                    Link {link}
                </li>
            )
        })
    }

    render() {
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