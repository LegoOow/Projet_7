const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/post');

//Posts//
router.get('/', userCtrl.getAllPost);
router.post('/', userCtrl.newPost);
router.get('/:id', userCtrl.getOnePost);
router.delete('/:id', userCtrl.deleteOnePost);
router.put('/:id', userCtrl.modifyOnePost);
router.get('/user:id/posts', userCtrl.getUserPosts);

//Comments//
router.get('/:id/comments', userCtrl.getAllComments);
router.post('/:id/comment/', userCtrl.newComment);
router.delete('/comment/:id', userCtrl.deleteComment);

module.exports = router;

