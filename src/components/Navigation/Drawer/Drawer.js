import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    '$500', '$1000', '$2000'
]
const API = 'https://yurii07.github.io/millionaire/data.json';
class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            money:[]
        };
    }

    // componentDidMount() {
    //     fetch(API)
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({ question: data}));
    // }

    renderLinks() {
        return links.slice(0).reverse().map((link, index) => {
            return (
                <li className="QuestionItem" key={index}>
                    Link {link}
                </li>
            )
        })
    }

    render() {
        // const { question } = this.state;
        // console.log(question,'this.state');
        // console.log(this.state.question,'this.state');
        // const items = this.state.map((item, key) =>
        //
        //     {item}
        //
        // );
        // console.log(items,'itemse');

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