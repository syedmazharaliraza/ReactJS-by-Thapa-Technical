import React from "react";

function App5() {
    // console.log(state);
    var currTime = new Date().toLocaleTimeString();
    let [count, setCount] = useState(0);
    let [time, updateTime] = useState(currTime);
    function counter() {
        setCount(++count);
    }
    function timeUpdateFunc() {
        currTime = new Date().toLocaleTimeString();
        updateTime(currTime);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={counter}>Click me</button>
            <h1>{time}</h1>
            <button onClick={timeUpdateFunc}>Get time</button>
        </>
    );
};

export default App5;