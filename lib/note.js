const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const notes = require('../db/db');

const createNote = note => {
    const newNote = {
        title: note.title,
        text: note.text,
        id: uniqid()
    }
    notes.push(newNote);
    console.log(notes);
}

module.exports = {createNote};