var mongoClient = require('mongodb').MongoClient
var dbConfig = require('../Config/dbConnection')

exports.Post = {
    getPosts: function (req, res) {
        dbConfig.Postcollection.find({},{projection:{'comments':0}}).toArray(function (err, docs) {
            if (err)
                res.send({'status': 'error'})
           res.send({'status': 'success', 'docs': docs})
        });
    },
    deletePost: function (req, res) {
        dbConfig.Postcollection.deleteOne({id: req.body.id}, function (err, result) {
            if (err)
                res.send({'status': 'error'})
            res.send({'status': 'success'})
        });
    },
    savePost: function (req, res) {
        dbConfig.Postcollection.insertOne(
            {
                title: req.body.title,
                body: req.body.body
            }, function (err, result) {
                if (err)
                    res.send({'status': 'error'})
                res.send({'status': 'success'})
            });
    },
    editPost: function (req, res) {
        dbConfig.Postcollection.findOne({id: req.params.id},{projection:{'comments':0}},function (err, doc) {
            if (err)
                res.send({'status': 'error'})
            res.send({'status': 'success', 'doc': doc})
        });
    },
    updatePost: function (req, res) {
        dbConfig.Postcollection.updateOne({id: req.params.id},
            {
                $set:
                    {'title': req.body.title, 'body': req.body.body}
            }, function (err, doc) {
                if (err)
                    res.send({'status': 'error'})
                res.send({'status': 'success', 'doc': doc})
            });
    }
}