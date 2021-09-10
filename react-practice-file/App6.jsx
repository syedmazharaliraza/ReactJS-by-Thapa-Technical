import React, { useState } from "react";
import "./index.css";

function App6() {
    let currTime = new Date().toLocaleTimeString();
    let [updatedTime, updateTime] = useState(currTime);
    setInterval(() => {
        currTime = new Date().toLocaleTimeString();
        updateTime(currTime);
    }, 1000);
    return(
        <div style={{backgroundColor: {currBgColor}}} className="bg35">
        <h1 className="h35">{updatedTime}</h1>
        </div>
    );    
}

export default App6; 