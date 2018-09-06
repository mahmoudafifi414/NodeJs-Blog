var commentController = require('../Controllers/CommentController').CommentCotroller;
module.exports = function (app) {
    app.post('/comments',commentController.getComments)
    app.post('/comment/store',commentController.writeComment)
}