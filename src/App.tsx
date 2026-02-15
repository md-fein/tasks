import React from "react";
import "./App.css";
import cats from "./cats.jpg";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    const rectStyle = {
        width: "100px",
        height: "150px",
        backgroundColor: "red",
    };
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Mikey Feinstein</h1>
            <p>Hello World!</p>
            <ul style={{ listStylePosition: "inside" }}>
                <li>Kitten 1: JoJo</li>
                <li>Kitten 2: Robin</li>
                <li>The kitties are Calico sisters</li>
            </ul>
            <img
                src={cats}
                alt="A picture of cats JoJo and Robin"
                style={{ width: "50%" }}
            />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            1st column
                            <div style={rectStyle}></div>
                        </Col>

                        <Col>
                            2nd column
                            <div style={rectStyle}></div>
                        </Col>

                        <Col>
                            3rd column
                            <div style={rectStyle}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
