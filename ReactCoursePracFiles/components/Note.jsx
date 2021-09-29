import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props) {
    return (
        <>
            <div className="note">
                <span>{props.text}</span>
                <div className="note-footer">
                    <small>{props.date}</small>
                    <DeleteForeverIcon className="delete-icon" onClick={() => props.deleteNote(props.id)} />
                </div>
            </div>
        </>
    );
}

export default Note;