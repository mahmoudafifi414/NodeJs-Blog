var PostModel = require('../models/Post').Post
var postValidation = require('../validation/PostValidation')
var postValidationInstance=new postValidation()

exports.PostController = {
    //to save post
    savePost: function (req, res) {
        if (postValidationInstance.validateTitleAndBody(req)) {
            PostModel.savePost(req, res)
        }else{
            res.send({'status': 'validationError', 'errors': postValidationInstance.errors})
        }
    },

//to get all posts
    getPosts: function (req, res) {
        PostModel.getPosts(req, res)
    },

//to delete specific post
    deletePost: function (req, res) {
        PostModel.deletePost(req, res)
    },

//to edit specific post
    editPost: function (req, res) {
        PostModel.editPost(req, res)
    },

//to update specific post
    updatePost: function (req, res) {
        if (postValidationInstance.validateTitleAndBody(req)) {
            PostModel.updatePost(req, res)
        }else{
            res.send({'status': 'validationError', 'errors': postValidationInstance.errors})
        }
    }
}
