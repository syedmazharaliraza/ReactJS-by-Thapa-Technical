import React from "react";
import { QnA } from "./QnA";
import Accordian from "./Accordian";

function App13() {
    return (
        QnA.map((each,id) => {
            return (
                  <Accordian key={id} question={each.question} answer={each.answer}/>
            );
        })
    );
}

export default App13;