import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    // loadData() {
    //     console.log("loading data");
    //     fetch('https://yurii07.github.io/millionaire/data.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ quiz: data });
    //         })
    //         .catch(err => console.error(this.props.url, err.toString()))
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = { quiz: null }; // initialize with null
    // }
    // componentDidMount() {
    //     console.log('GrandChild did mount.');
    //
    //     this.loadData()
    // }
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        checkpoint: null,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                money: 500,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                money: 1000,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {

        // check right. if double click on right answer
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                        checkpoint: this.state.quiz[this.state.activeQuestion].money
                    })
                } else {

                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                        checkpoint: this.state.quiz[this.state.activeQuestion].money
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
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,

        })
    }

    render() {
        console.log(this.state.quiz);

        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {/*<h1>Ответьте на все вопросы</h1>*/}

                    {this.state.isFinished
                        ? <FinishedQuiz
                            onRetry={this.retryHandler}
                            checkpoint={this.state.checkpoint}
                        />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;