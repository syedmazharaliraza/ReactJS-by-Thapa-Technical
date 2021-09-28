import React, { useState } from "react";

function Accordian(props) {
    const flex = {
        display: "flex"
    };
    const [show,setShow] = useState(false);
    return (
        <>
            <div style={flex}>
                <button onClick={() => {setShow(!show)}}>{show ? "➖" : "➕"}</button>
                <span>{props.question}</span>
            </div>
            {show && <div><p>{props.answer}</p></div>}
        </>
    );
}

export default Accordian;