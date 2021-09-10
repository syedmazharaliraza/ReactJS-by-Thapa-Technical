import React from 'react';

const time = new Date().getHours();
const text = {
    width: "100%",
    textAlign: "center",
    fontFamily: "'Montserrat', sans - serif",
    fontSize: "3em",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%,-100%)',
    color: '#FE9D8F'
}

const color = {
    color: 'black'
}
var greeting = "";

if (time > 0 && time < 12) {
    greeting = "good morning";
    color.color = "green";
}
else if (time >= 12 && time < 16) {
    greeting = "good afternoon";
    color.color = "brown";
}
else if (time >= 16 && time < 21) {
    greeting = "good evening";
    color.color = "orange";
}
else {
    greeting = "good night";
    color.color = "black";
}

function Text() {
    return (
    <h1 style={text}>
        Hello sir, <span style={color}>{greeting}</span>
    </h1>
    );
};

export default Text;