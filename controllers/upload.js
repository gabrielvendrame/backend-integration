
// const IncomingForm = require('formidable').IncomingForm

// const fs = require('fs');


// exports.handleUpload = (req, res) => {
//     let form = new IncomingForm()

//     form.on('file', (field, file) => {
//         console.log(file, field);
//     })
//     form.on('end', () => {
//         res.status(201).json({
//             message: 'Audio added successfully'
//         });
//     })
//     form.on('error', (err) => {
//         res.status(500).json({
//             message: 'Audio handle failed'
//         });
//     })
//     form.parse(req)

// }

//want if possible get the type from fle

const Image = require('../models/image');
const Song = require('../models/song');
const Video = require('../models/video');

exports.handleImageUpload = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const image = new Image({
        title: req.body.title,
        imagePath: url + '/assets/images/' + req.file.filename
        // creator: req.userData.userId
    })
    image.save()
        .then(createdImage => {
            res.status(201).json({
                message: 'Image/images uploaded successfully'
                // image: {
                //     ...createdImage,
                //     id: createdImage._id

                // }

            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Image/images upload failed on server :('
            })
        })

}


exports.handleAudioUpload = (req, res, next) => {
    
    const url = req.protocol + '://' + req.get('host');
    const audio = new Song({
        title: 'title',
        artist: 'sconosciuto',
        songPath: url + '/assets/audio/' + req.file.filename,
    })
    audio.save()
        .then(createdAudio => {
            res.status(201).json({
                message: 'Audio/audios uploaded successfully'
                // audio: {
                //     ...createdAudio,
                //     id: createdAudio._id

                // }

            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Audio/audios upload failed on server :('
            })
        })

}



exports.handleVideoUpload = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const video = new Video({
        title: 'title',
        creator: 'Franco',
        duration: 'sconosciuto',
        videoPath: url + '/assets/video/' + req.file.filename,
    })
    video.save()
        .then(createdVideo => {
            res.status(201).json({
                message: 'Video/videos uploaded successfully'
                // video: {
                //     ...createdVideo,
                //     id: createdAudio._id

                // }

            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Video/videos upload failed on server :('
            })
        })

}