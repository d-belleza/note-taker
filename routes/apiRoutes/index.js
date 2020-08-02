const router = require('express').Router();

const {createNote} = require('../../lib/note');
const notes = require('../../db/db');


router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req,res) => {
    // create new note
    createNote(req.body);
})

module.exports = router;