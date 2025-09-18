
const songs = [
    {
        id: 1,
        name: "Bohemian Rhapsody",
        artist: ["Queen", "Freddie Mercury"]
    },
    {
        id: 2,
        name: "Hotel California",
        artist: ["Eagles", "Don Felder", "Don Henley", "Joe Walsh"]
    },
    {
        id: 3,
        name: "Imagine",
        artist: ["John Lennon"]
    },
    {
        id: 4,
        name: "Billie Jean",
        artist: ["Michael Jackson"]
    },
    {
        id: 5,
        name: "Sweet Child O' Mine",
        artist: ["Guns N' Roses", "Axl Rose", "Slash"]
    },
    {
        id: 6,
        name: "Stairway to Heaven",
        artist: ["Led Zeppelin", "Jimmy Page", "Robert Plant"]
    },
    {
        id: 7,
        name: "Smells Like Teen Spirit",
        artist: ["Nirvana", "Kurt Cobain"]
    },
    {
        id: 8,
        name: "Yesterday",
        artist: ["The Beatles", "Paul McCartney"]
    }
];

exports.getSongs = (_req, res) => {
    res.status(200).json(songs);
};

exports.createSong = (req, res) => {
    console.log(req.body)

    const newSong = {
        id: songs.length + 1,
        name: req.body.name,
        artist: req.body.artist
    }

    songs.push(newSong)

    res.status(200).json(songs)
}

exports.getSongsById = (req, res) => {
    const songId = +req.params.id;
    const song = songs.find(song => song.id === songId);

    if (song) {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: 'Song not found' });
    }
};

exports.deleteSongById = (req, res) => {
    const songId = +req.params.id;

    const songIndex = songs.findIndex(song => song.id === songId);

    if (songIndex !== -1) {
        songs.splice(songIndex, 1);
        res.status(200).json(songs);
    } else {
        // Return error if song not found
        res.status(404).json({ error: 'Song not found' });
    }
};

exports.updateSongById = (req, res) => {
    const songId = +req.params.id;
    const songIndex = songs.findIndex(song => song.id === songId);
    
    if (songIndex !== -1) {
        if (req.body.name) {
            songs[songIndex].name = req.body.name;
        }
        if (req.body.artist) {
            songs[songIndex].artist = req.body.artist;
        }
        if (req.body.url) {
            songs[songIndex].url = req.body.url;
        }
        res.status(200).json(songs);
    } else {
        res.status(404).json({ error: 'Song not found' });
    }
};