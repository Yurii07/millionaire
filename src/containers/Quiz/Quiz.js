import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Loading from "../../components/UI/Loading/Loading";

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            isFetching: false,
            isFinished: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
            checkpoint: null,
            menu: false,
            width: window.innerWidth,
            isLoading: false
        }
    }

    componentDidMount() {

        fetch("https://yurii07.github.io/millionaire/data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(() => {
                        this.setState({
                            isLoaded: true,
                            items: result
                        });
                    }, 1000)
                },
                // Note: it's important to handle errors here, and not in the catch () block,
                // so as not to catch exceptions from errors in the components themselves.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        window.addEventListener('resize', this.handleWindowSizeChange);
        if (this.state.width > 800) {
            this.setState({
                menu: true
            })
            return;
        }

        this.setState({
            menu: false
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    onAnswerClickHandler = answerId => {

        // check right. if double click on right answer
        // if (this.state.answerState) {
        //     const key = Object.keys(this.state.answerState)[0]
        //     if (this.state.answerState[key] === 'correct') {
        //         return
        //     }
        // }
        if (this.state.isFetching) {
            return
        }

        const question = this.state.items[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                isFetching: true,
                isLoading: true
            })

            setTimeout(() => {
                this.setState({
                    answerState: {[answerId]: 'correct'}
                })
            }, 2000)

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isLoaded: false,
                        isFinished: true,
                        checkpoint: this.state.items[this.state.activeQuestion].money
                    })
                    return;
                }

                // this.state.items[this.state.activeQuestion].prevQuiz = true;
                this.setState(({items})=>{
                    // let newItems = Object.assign([],items);
                    let newItems = [...items];
                    newItems[this.state.activeQuestion].prevQuiz = true;
                    return {
                        items:newItems
                    }
                })

                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null,
                    checkpoint: this.state.items[this.state.activeQuestion].money,
                    isFetching: false,
                    isLoading: false
                })

                clearTimeout(timeout)

            }, 3000)

            return;
        }
        this.setState({
            isLoading: true,
        })
        setTimeout(() => {
            this.setState({
                answerState: {[answerId]: 'wrong'}
            })
        }, 2000)

        setTimeout(() => {
            this.setState({
                isLoading: false,
                isFinished: true,
            })
        }, 3000)

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.items.length
    }

    retryHandler = () => {

        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            checkpoint: null,
        })
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        const {width, error, isLoaded, items, activeQuestion, answerState, isLoading, menu, checkpoint, isFinished} = this.state;
        const isMobile = width <= 800;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading/>;
        } else {
            return (
                <div className={classes.Quiz}>
                    {isFinished
                        ? <FinishedQuiz
                            onRetry={this.retryHandler}
                            checkpoint={checkpoint}/>
                        :
                        <div className={classes.Wrapper}>
                            <Drawer isOpen={menu}
                                    onClose={this.menuCloseHandler}
                                    quizData={items}
                                    activeQuiz={activeQuestion}/>

                            {isMobile &&
                            <MenuToggle
                                onToggle={this.toggleMenuHandler}
                                isOpen={menu}/>
                            }

                            <ActiveQuiz
                                answers={items[activeQuestion].answers}
                                question={items[activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={items.length}
                                answerNumber={activeQuestion + 1}
                                state={answerState}
                                loading={isLoading}/>
                        </div>
                    }
                </div>
            );
        }
    }
}

export default Quiz;