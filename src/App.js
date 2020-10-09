import React, {useState} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import StartQuiz from "./components/StartQuiz/StartQuiz";

const App = () => {
    const [isStart, setIsStarted] = useState(false);

    const startGame = () => setIsStarted(true);

    return (

        <div className="App">

            {isStart
                ? <Layout>
                    <Quiz/>
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
