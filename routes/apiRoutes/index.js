const router = require('express').Router();

const {createNote} = require('../../lib/note');
const notes = require('../../db/db');


router.get('/api/notes', (req, res) => {
    res.json(notes);
})

router.post('/api/notes', (req,res) => {
    // create new note
    const note = createNote(req.body, notes);
    res.json(note);
})

module.exports = router;