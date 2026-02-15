import React from "react";
import "./App.css";
import cats from "./cats.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <header>Mikey Feinstein</header>
            <h1>Test header</h1>
            <p>Hello World!</p>
            <ul style={{ listStylePosition: "inside" }}>
                <li>Kitten 1: JoJo</li>
                <li>Kitten 2: Robin</li>
                <li>The kittes are Calico sisters</li>
            </ul>
            <img
                src={cats}
                alt="A picture of cats JoJo and Robin"
                style={{ width: "50%" }}
            />
        </div>
    );
}

export default App;
