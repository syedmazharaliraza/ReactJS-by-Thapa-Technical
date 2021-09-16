import React from "react";
import "./index.css";
function ToDoListItem(props) {
    return (
        <div className="listItem">
            <button className="deleteButton" onClick={() => props.onSelect(props.id)}>&#x2716;</button>
            <li>{props.text}</li>
        </div>
    );
};

export default ToDoListItem;