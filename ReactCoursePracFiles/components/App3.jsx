import React from "react";
import {add,subtract, multiply, divide } from './Calc';
let a = 50;
let b = 6;
function App3() {
    return (
        <>
            <h1>Sum of {`${a} and ${b}`} is {add(a, b)}</h1>
            <h1>Subtraction of {`${a} and ${b}`} is {subtract(a, b)}</h1>
            <h1>Product of {`${a} and ${b}`} is {multiply(a, b)}</h1>
            <h1>Division of {`${a} and ${b}`} is {divide(a, b)}</h1>
        </>
    );
}

export default App3;