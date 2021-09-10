import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";

// USING MULTIPLE JSX INSIDE RENDER METHOD
// METHOD 1
 ReactDOM.render(
    [
        <h1>Hello World</h1>,
        <p> Plz like my video</p>
    ]
    , document.getElementById("root")); 

// METHOD 2
 ReactDOM.render(
    <div>
        <h1>Hello World</h1>,
        <p> Plz like my video</p>
    </div>
    , document.getElementById("root")); 

// METHOD 3
ReactDOM.render(
<React.Fragment>
    <h1>Hello World</h1>
    <p> Plz like my video</p>
</React.Fragment>
, document.getElementById("root"));

// METHOD 4
ReactDOM.render(
<> 
    <h1>Hello World</h1>
    <p> Plz like my video</p>
</>
, document.getElementById("root"));

const fname = "Syed Mazhar";
const lname = "Ali Raza";

var currDate = new Date().toLocaleDateString();
var currTime = new Date().toLocaleTimeString();
const time = new Date().getHours();

const img = "https://picsum.photos/200/300?grayscale";
const link = "https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60";

// Styles
const heading = {
    color: "#fa9191",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif"
};
const background = {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#A0D9D0"
}

const text_bg = {
    position: "absolute",
    width: "50%",
    height: "15%",
    backgroundColor: "#FFE9C4",
    borderRadius: "30px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
}
const text = {
    width: "100%",
    textAlign: "center",
    fontFamily: "'Montserrat', sans - serif",
    fontSize: "50px",
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

ReactDOM.render(
    <>
        <h1 style={heading}>MY TOP 5 NETFLIX SERIES </h1>
        <p>This is a list of my top 5 favourite Netflix series.</p>
        <ol>
            <li> STRANGER THINGS </li>
            <li> MONEY HEIST </li>
            <li> FRIENDS </li>
            <li> BIG BANG THEORY </li>
            <li> SILICON VALLEY </li>
        </ol>
        <p>{`List by ${fname} ${lname}`} </p>
        <h1 className="heading">Hello My name is {fname}</h1>
        <p>{`Today's Date is ${currDate} `}</p>
        <p>{`Current Time is ${currTime}`} </p>
        <h1 contentEditable="true" style={{
            color: "#fa9191",
            textAlign: "center",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontFamily: "'Montserrat', sans-serif"
        }}>Editable Heading</h1>
        <img src="https://picsum.photos/seed/picsum/200/300" alt="sample image" />
        <a href={link} target="_blank">
            <img src={img} alt="sample image" />
        </a>
        <div style={background}>
            <div style={text_bg}>
                <h1 style={text}>
                    Hello sir, <span style={color}>{greeting}</span>
                </h1>
            </div>
        </div>
        <Heading />
        <Para/>
        <List/>
    </>
    , document.getElementById("root"));
