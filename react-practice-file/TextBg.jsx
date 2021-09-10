import React from 'react';

const text_bg = {
    position: "absolute",
    width: "60%",
    height: "15%",
    backgroundColor: "#FFE9C4",
    borderRadius: "30px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
}

function TextBg() {
    return  <div style={text_bg}></div>
};

export default TextBg;