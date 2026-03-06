import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState(false);

    return (
        <Button
            onClick={() => {
                setShow(!show);
            }}
        >
            {show ? "42" : "Reveal Answer"}
        </Button>
    );
}
