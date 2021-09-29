import React, { useContext } from "react";
import { Fword, Lword } from "../App15";
function Comp2() {
    const fword = useContext(Fword);
    const lword = useContext(Lword);
    return (
        <>
        <h1>{fword} {lword}</h1>
        </>
    );
};

export default Comp2;
