var postController = require('../Controllers/PostController').PostController;
module.exports = function (app) {
    app.post('/post/store',postController.savePost)
    app.get('/posts/all',postController.getPosts)
    app.post('/post/delete',postController.deletePost)
    app.post('/post/edit',postController.editPost)
    app.post('/post/update',postController.updatePost)
}