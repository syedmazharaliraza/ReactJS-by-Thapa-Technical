import React, { useState } from "react";
function App8() {
    let [firstname,updateName] = useState("");
    let [displayName,updateDisplayName] = useState("");
    function type(event) {
        updateName(event.target.value);
    }
    function display(e) {
        e.preventDefault();
        updateDisplayName(firstname);
    }

    return (
        <>
        <h1>Hello {displayName}</h1>
        <form onSubmit={display}>
            <input type="text" placeholder="Enter your first name" onChange={type} /><br/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};
export default App8;