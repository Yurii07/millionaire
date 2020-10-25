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

    // make sure to remove the listener
// when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };
    onAnswerClickHandler = answerId => {
        // this.props.quizData[0].prevQuiz = true;

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

        const question = this.props.quizData[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'correct'}
            })

            this.setState({
                isFetching: true,
                isLoading: true

            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                        checkpoint: this.props.quizData[this.state.activeQuestion].money
                    })
                    return;
                }

                this.props.quizData[this.state.activeQuestion].prevQuiz = true;

                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null,
                    checkpoint: this.props.quizData[this.state.activeQuestion].money,
                    isFetching: false,
                    isLoading:false
                })

                clearTimeout(timeout)

            }, 2000)

            return;
        }

        this.setState({
            answerState: {[answerId]: 'wrong'}
        })
        setTimeout(() => {
            this.setState({
                isFinished: true,
            })
        }, 2000)

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.props.quizData.length
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
        const {width} = this.state;
        const isMobile = width <= 800;
        // the rest is the same...

        return (
            <div className={classes.Quiz}>
                {this.state.isFinished
                    ? <FinishedQuiz
                        onRetry={this.retryHandler}
                        checkpoint={this.state.checkpoint}
                    />
                    :
                    <div className={classes.Wrapper}>
                        <Drawer isOpen={this.state.menu}
                                onClose={this.menuCloseHandler}
                                quizData={this.props.quizData}
                                activeQuiz={this.state.activeQuestion}

                        />
                        {isMobile &&
                        <MenuToggle
                            onToggle={this.toggleMenuHandler}
                            isOpen={this.state.menu}
                        />
                        }

                        <ActiveQuiz
                            answers={this.props.quizData[this.state.activeQuestion].answers}
                            question={this.props.quizData[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.props.quizData.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                            loading={this.state.isLoading}
                        />


                    </div>
                }

            </div>
        );
    }
}

export default Quiz;