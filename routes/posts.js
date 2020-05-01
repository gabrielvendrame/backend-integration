const express = require("express");

const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const PostsController = require("../controllers/posts");



router.post('', checkAuth, extractFile , PostsController.createPost)

router.get('', PostsController.getPosts);

router.get('/:id', PostsController.getSinglePost);

router.delete('/:id', checkAuth, PostsController.deletePost);

router.put("/:id", checkAuth, extractFile, PostsController.updatePost);

module.exports = router;