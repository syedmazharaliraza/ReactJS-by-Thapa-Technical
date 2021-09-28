import React, { useState } from "react";
import Button from '@mui/material/Button';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App12() {
    let [number, updatenum] = useState("0");
    const incr = () => {
        updatenum(++number);
    };
    const decr = () => {
        if (number == 0) {
            alert("Zero limit reached");
        }
        else
            updatenum(--number);
    };


    return (
        <>
            <h1>{number}</h1>
            <Button variant="contained" onClick={incr}><AddIcon /></Button>
            <Button variant="contained" onClick={decr}><MinimizeIcon /></Button>
            <CountdownCircleTimer
                isPlaying
                duration={100}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            <>
            <button className="btn btn-success">Bootstrap button</button>
            <button className="btn btn-outline-primary">Primary</button>
            <button className="btn btn-outline-secondary">Secondary</button>
            <button className="btn btn-outline-success">Success</button>
            <button className="btn btn-outline-danger">Danger</button>
            <button className="btn btn-outline-warning">Warning</button>
            <button className="btn btn-outline-info">Info</button>
            <button className="btn btn-outline-light">Light</button>
            <button className="btn btn-outline-dark">Dark</button>
        </>

        </>
    );
}

export default App12;