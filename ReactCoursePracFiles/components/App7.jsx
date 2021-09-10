import React, { useState } from "react";
import "./index.css";
function App7() {
    let color = "purple";
    let [currBgColor, updateColor] = useState(color);
    function onMouseEnterColor() {
        updateColor("#d1d9dd");
    };
    function onMouseLeaveColor() {
        updateColor(color);
    };
    return (
        <>
        <div style={{ backgroundColor: currBgColor }} className="bg35">
            <button onMouseEnter={onMouseEnterColor} onMouseLeave={onMouseLeaveColor}>Mouseover</button>
        </div>
        </>
    );
};
export default App7;