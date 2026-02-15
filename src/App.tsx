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
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            Unordered List:
            <ul>
                <li>See below my kittens, JoJo and Robin</li>
                <li>Another thing</li>
                <li>A third item</li>
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
