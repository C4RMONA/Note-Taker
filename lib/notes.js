const fs = require('fs');
const path = require('path');
const {v1:uuidv1} = require('uuid');

function createNote(body) {
    const notesArray = getNotes();
    const note = {...body, id:uuidv1()};
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote(id) {
    const notesArray = getNotes();
    const newNotes = notesArray.filter(note => note.id !== id) 
    fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: newNotes }, null, 2)
);
return newNotes;
}

function getNotes () {
    const noteData = JSON.parse(fs.readFileSync(
        path.join(__dirname, '../db/db.json'),{ encoding: "utf8", flag: "r"}
    ))
    console.log(noteData)
    return noteData.notes;
}
module.exports = {createNote, deleteNote, getNotes};