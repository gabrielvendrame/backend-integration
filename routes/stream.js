const express = require("express");

const StreamController = require("../controllers/stream");


const router = express.Router();

router.get('/video', StreamController.sendVideoList);
router.get('/audio', StreamController.sendAudioList);
router.get('/video/:id', StreamController.sendVideoStream);
router.get('/audio/:id', StreamController.sendAudioStream);
// router.post('/:id', VideoController.sendVideoStream);

module.exports = router;