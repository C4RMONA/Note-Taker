const router = require('express').Router();
const { createNote, deleteNote, getNotes } = require('../../lib/notes');



router.get('/notes', (req, res) => {
    res.json(getNotes());
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    res.json(deleteNote(req.params.id))
})

module.exports = router;