const router = require('express').Router();

const saveNote = require('../../lib/notes');
let notes = require('../../db/db.json');

// API routes
router.get('/notes', (req, res) => {
	res.json(notes);
});

router.post('/notes', (req, res) => {
	// save note to db
	const newNote = req.body;
	saveNote(newNote);
	res.json(notes);
});

module.exports = router;