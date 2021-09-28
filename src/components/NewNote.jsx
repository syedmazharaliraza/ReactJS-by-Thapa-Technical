import React from "react";
import { useState } from "react";
function NewNote(props) {
    const charLimit = 200;
    const [noteText, setNoteText] = useState('');
    const handleText = (e) => {
        if (charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };
    const handleSave = () => {
        if (noteText.trim().length > 0) {
            props.addNote(noteText);
            setNoteText('');
        }
    };
    return (
        <>
            <div className="note new">
                <textarea rows='8' cols='10' placeholder="type a new note..." value={noteText} onChange={handleText} />
                <div className="note-footer">
                    <small>{charLimit - noteText.length} words remaining</small>
                    <button className="save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </>
    );
}

export default NewNote;