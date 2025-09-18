const express = require('express');
const { getSongs, createSong, getSongsById, deleteSongById, updateSongById } = require('./handlers/songs');
const router = express.Router();

router.get('/songs', getSongs);
router.get('/songs/:id', getSongsById);

router.put('/songs/:id', updateSongById);

router.post('/songs', createSong);

router.delete('/songs/:id', deleteSongById);

module.exports = router;