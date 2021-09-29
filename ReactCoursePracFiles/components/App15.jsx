import React, { createContext, useState,useEffect  } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./components/Comp2";
const Fword = createContext();
const Lword = createContext();
function App15() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const updateValue1 = () => {
        setValue1(value1+1)  
    };
    const updateValue2 = () => {
        setValue2(value2+1)  
    };

    useEffect(() => {
        document.title = `You clicked ${value1+value2} times`;
    });
    return (
        <>
            <Fword.Provider value={"hello"}>
                <Lword.Provider value={"World"}>
                    <Comp1/>
                    <Comp2/>
                    <h1 onClick={updateValue1}>Click here {value1}</h1>
                    <h1 onClick={updateValue2}>Click here {value2}</h1>
                </Lword.Provider>
            </Fword.Provider>
        </>
    );
};

export default App15;
export { Fword, Lword };