import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import "./index.css";

function App11() {
    const [item, addItemInList] = useState();
    const [itemList, addItemInArray] = useState([]);
    function updateItem(e) {
        addItemInList(e.target.value);
    }
    function addItemOnClick() {
        addItemInArray((prevVal) => {
            return [...prevVal, item];
        });
        addItemInList("");
    };

    function deleteItem(id) {
        addItemInArray((prevVal) => {
            return prevVal.filter((arrElement, index) => id !== index);
        });
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1 className="ToDoHeading"> ToDo List </h1>
                    <br />
                    <input className="input-list" type="text" placeholder="Add an item" onChange={updateItem} value={item} />
                    <button className="addItemButton" onClick={addItemOnClick}>+</button>
                    <ol className="list">
                        {itemList.map((val, index) => {
                            return <ToDoListItem text={val} id={index} onSelect={deleteItem} />;
                        })}
                    </ol>

                </div>
            </div>
        </>
    );
}

export default App11;