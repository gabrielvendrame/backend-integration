const express = require("express");

const VideoController = require("../controllers/video");


const router = express.Router();

router.get('', VideoController.sendVideoStream);
// router.post('/:id', VideoController.sendVideoStream);

module.exports = router;