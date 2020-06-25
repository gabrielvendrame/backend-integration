const multer = require('multer');

let multerExportOptions;
let ext;

const MIME_TYPE_MAP_IMAGE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const MIME_TYPE_MAP_AUDIO = {
    'audio/mpeg': 'mp3',
    'audio/wav': 'wav',
}

const MIME_TYPE_MAP_VIDEO = {
    'video/mp4': 'mp4',
    'video/quicktime': 'mov',
    'video/x-msvideo': 'avi',
    'video/x-ms-wmv': 'wmv',

}
const storage = multer.diskStorage({
    
    destination: (req, file, callback) => {
        const isValid = MIME_TYPE_MAP_IMAGE[file.mimetype] || MIME_TYPE_MAP_AUDIO[file.mimetype] || MIME_TYPE_MAP_VIDEO[file.mimetype] ;
        console.log(file.mimetype);
        let error = new Error('Invalid MimeType');
        let path;
        
        if (isValid) {
            error = null;
        }
        if (MIME_TYPE_MAP_IMAGE[file.mimetype]) {
            path = './assets/images' 
            ext = MIME_TYPE_MAP_IMAGE[file.mimetype]
        }
        if (MIME_TYPE_MAP_AUDIO[file.mimetype]) {
            path = './assets/audio'
            ext = MIME_TYPE_MAP_IMAGE[file.mimetype]
        }
        if (MIME_TYPE_MAP_VIDEO[file.mimetype]) {
            path = './assets/video'
            ext = MIME_TYPE_MAP_IMAGE[file.mimetype]    
        }
        callback(error, path);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.toLocaleLowerCase().split(' ').join('-');
        callback(null, name + '-' + Date.now() + '.' + ext);
    }
});

module.exports = multer({ storage: storage }).single('attachment');