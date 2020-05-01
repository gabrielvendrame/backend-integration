const express = require("express");

const VideoController = require("../controllers/video");


const router = express.Router();

router.post('', VideoController.sendVideoStream);
// router.post('/:id', VideoController.sendVideoStream);

module.exports = router;