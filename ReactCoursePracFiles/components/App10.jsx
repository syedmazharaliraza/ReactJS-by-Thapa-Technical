import React, { useState } from "react";
import "./index.css";
function App9() {
    let [info, updateInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
    function input(event) {
        const { name, value } = event.target;
        updateInfo((prevValue) => {
           return {
               ...prevValue,
               [name]: value
           };
        });
    };

    function onSubmit(e) {
        e.preventDefault();
        alert("submitted");
    }

    return (
        <div className="div40">
            <h3 className="h40">First Name: {info.fname}</h3>
            <h3 className="h40">Last Name:{info.lname}</h3>
            <h3 className="h40">Email: {info.email}</h3>
            <h3 className="h40">Phone Number: {info.phone}</h3>
            <form className="form40" onSubmit={onSubmit}>
                <input type="text" name="fname" placeholder="Enter your first name" onChange={input} /><br />
                <input type="text" name="lname" placeholder="Enter your last name" onChange={input} /><br />
                <input type="email" name="email" placeholder="Enter your email" onChange={input}/><br />
                <input type="number" name="phone" placeholder="Enter your number" onChange={input} /><br />
                <button className="button40" type="submit">Submit</button>
            </form>
        </div>
    );
};
export default App9;