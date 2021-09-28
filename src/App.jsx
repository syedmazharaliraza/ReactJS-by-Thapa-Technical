import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'
import "./index.css";
import SearchBar from "./components/SearchBar";

function App() {
    const [notes, setNotes] = useState([
    ]);
    
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        setNotes([...notes, newNote]);
    };
    
    const deleteNote = (id) => {
        const newNotes = notes.filter(eachNote => eachNote.id !== id);
        setNotes(newNotes);
    };
    const [searchText, setSearchText] = useState("");
    
    return (
        <>
            <div className="container">
                <SearchBar searchNote={setSearchText}/>
                <NotesList notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)} addNote={addNote} deleteNote={deleteNote} />
            </div>
        </>
    );
}

export default App;