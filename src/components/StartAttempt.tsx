import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                disabled={inProgress || attempt <= 0}
                onClick={() => {
                    setProgress(true);
                    setAttempt(attempt - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setAttempt(attempt + 1);
                }}
            >
                Mulligan
            </Button>
            <div>{attempt}</div>
        </div>
    );
}
