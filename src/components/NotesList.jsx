import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
function NotesList(props) {
    return (
        <>
            <div className="notes-list">
                {props.notes.map((eachNote) => (
                    <>
                        <Note id= {eachNote.id} text={eachNote.text} date={eachNote.date} deleteNote={props.deleteNote}/>
                    </>
                ))}
                <NewNote addNote={props.addNote}/>
            </div>
        </>
    );
}

export default NotesList;