var Comment = require('../models/Comment').Comment
var commentValidation = require('../validation/CommentValidation')
var commentValidationInstance = new commentValidation()

exports.CommentCotroller = {
    //get comments of specific post
    getComments: function (req, res) {
        Comment.getComments(req, res)
    },

//write comment on post
    writeComment: function (req, res) {
        console.log(req.body.name)
        if (commentValidationInstance.validateComment(req)) {
            Comment.writeComment(req, res)
        }else{
            res.send({'status': 'validationError', 'errors': commentValidationInstance.errors})
        }
    }
}
