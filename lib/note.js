const path = require('path');
const fs = require('fs');

// create unique ids
const uniqid = require('uniqid');

function createNote(body, dbArray) {
    console.log(body);
    const note = {
        title: body.title,
        text: body.text,
        id: uniqid()
    }
    dbArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: dbArray }, null, 2)
    );
    return note;
}

module.exports = {createNote};