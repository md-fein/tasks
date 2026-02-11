import React from "react";
import "./App.css";
import cats from ".//cats.JPG";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <header>Mikey Feinstein</header>
            <h1>Test header</h1>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <img src={cats} alt="A picture of cats JoJo and Robin" />
        </div>
    );
}

export default App;
