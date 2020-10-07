import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Layout>
         <Quiz/>
          </Layout>
      </header>
    </div>
  );
}

export default App;
