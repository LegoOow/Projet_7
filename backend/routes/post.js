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

module.exports = router;

