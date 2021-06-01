const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/comment');

//Comments//
router.get('/:id/comments', userCtrl.getAllComments);
router.post('/:id/comment/', userCtrl.newComment);
router.delete('/comment/:id', userCtrl.deleteComment);

module.exports = router;