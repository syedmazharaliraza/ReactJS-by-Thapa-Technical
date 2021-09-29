import React from "react";
import { Fword, Lword } from "../../src/App15";
function Comp1() {
    return (
        <>
            <Fword.Consumer>
                {(Fvalue) => (
                    <Lword.Consumer>
                        {(Lvalue) => (
                            <h1>{Fvalue} {Lvalue}</h1>
                        )}
                    </Lword.Consumer>
                )}
            </Fword.Consumer>
        </>
    );
};

export default Comp1;
