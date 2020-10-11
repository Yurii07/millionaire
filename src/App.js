import React, {useEffect, useState} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import StartQuiz from "./components/StartQuiz/StartQuiz";

const App = () => {
    const [isStart, setIsStarted] = useState(false);
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        fetch('https://yurii07.github.io/millionaire/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data,'data');
                setQuiz(data);
            })
            .catch(err => console.error(this.props.url, err.toString()))
    },[]);

    const startGame = () => setIsStarted(true);

    return (

        <div className="App">

            {isStart
                ? <Layout>
                    <Quiz quizData={quiz}/>
                </Layout>
                :
                <StartQuiz
                    onClick={startGame}
                />
            }

        </div>
    );
}

export default App;
