import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Quiz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFinished: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
            checkpoint: null,
            menu: false,
            width: window.innerWidth,
            prevQuiz: false
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        if(this.state.width > 800) {
            this.setState({
                menu: true
            })
        }
        else {
            this.setState({
                menu:false
            })
        }
    }

    // make sure to remove the listener
// when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    onAnswerClickHandler = answerId => {

        // check right. if double click on right answer
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.props.quizData[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                        checkpoint: this.props.quizData[this.state.activeQuestion].money
                    })
                } else {

                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                        checkpoint: this.props.quizData[this.state.activeQuestion].money

                    })
                }
                clearTimeout(timeout)
            }, 2000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
            setTimeout(() => {
                this.setState({
                    isFinished: true,
                })
            }, 2000)
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.props.quizData.length
    }

    retryHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
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
        const { width } = this.state;
        const isMobile = width <= 800;
        // the rest is the same...

            return (
                <div className={classes.Quiz}>
                    <div className={classes.QuizWrapper}>

                        {this.state.isFinished
                            ? <FinishedQuiz
                                onRetry={this.retryHandler}
                                checkpoint={this.state.checkpoint}
                            />
                            :
                            <>
                                <Drawer isOpen={this.state.menu}
                                        onClose={this.menuCloseHandler}
                                        quizData={this.props.quizData}
                                        activeQuiz={this.state.activeQuestion }

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
                                />
                            </>
                        }
                    </div>
                </div>
            );
    }
}

export default Quiz;