import React, { useState } from "react";
import Button from '@mui/material/Button';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';

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
    return(
        <>
            <h1>{number}</h1>
            <Button variant="contained"><MinimizeIcon/></Button>
            <Button variant="contained"><AddIcon/></Button>
        </>
    );
}

export default App12;