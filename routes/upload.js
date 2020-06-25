const express = require("express");

const UploadController = require("../controllers/upload");
const extractFile = require('../middleware/file');


const router = express.Router();

router.post('/image', extractFile, UploadController.handleImageUpload);
router.post('/audio', extractFile, UploadController.handleAudioUpload);
router.post('/video', extractFile, UploadController.handleVideoUpload);


module.exports = router;