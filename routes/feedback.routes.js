const Router = require('express')
const router = new Router();
const postController = require('../controller/feedback.controller');

router.post('/feedback', postController.createPost);
router.get('/feedback', postController.getPostsByUser);
router.get('/feedbackAll', postController.getAllPosts);


module.exports = router;