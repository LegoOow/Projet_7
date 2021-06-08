const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/comment');

//Comments//
router.get('/:id/comments', auth, userCtrl.getAllComments);
router.post('/:id/comment/', auth, userCtrl.newComment);
router.delete('/comment/:id', auth, userCtrl.deleteComment);

module.exports = router;