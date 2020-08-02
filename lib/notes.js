const path = require('path');
const fs = require('fs');

// create unique ids
const uniqid = require('uniqid');

let notes = require('../db/db.json')

const saveNote = (note) => {
	const newNote = {
		title: note.title,
		text: note.text,
		id: uniqid()
	};
	notes.push(newNote);
	// write to .json file
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(notes, null, 2)
	);
};

module.exports = saveNote;