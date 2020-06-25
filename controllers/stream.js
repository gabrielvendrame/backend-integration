
const fs = require('fs');
const Song = require('../models/song');

exports.sendAudioList = (req, res, next) => {
    const audioQuery = Song.find();
    audioQuery
        .then(audios => {
            res.status(200).json({
                message: 'Success',
                audios: [{
                    title: 'Romeo',
                    artist: 'Amedeo',
                    url: 'http://localhost:3000/assets/audio/123.mp3'
                }],
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Server could not retrieve posts'
            })
        })
}

exports.createAudio = (req, res, next) => {

    const url = req.protocol + '://' + req.get('host');
    const song = new Song({
        title: req.body.title,
        artist: req.body.content,
        songPath: url + '/assets/audio/' + req.file.filename,
    })
    song.save()
        .then(createdSong => {
            res.status(201).json({
                message: 'Song added successfully'
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Creating audio failed on server :('
            })
        })


}

exports.sendVideoList = (req, res, next) => {
    const audioQuery = Song.find();
    let fetchedAudios;
}


exports.sendVideoStream = (req, res, next) => {
    const path = 'assets/video/sample2.mp4'
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }

}

exports.sendAudioStream = (req, res, next) => {
    const path = 'assets/audio/123.mp3'
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/mpeg',
        }
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/mpeg',
        }
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }

}