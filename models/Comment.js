var mongoClient = require('mongodb').MongoClient
var dbConfig = require('../Config/dbConnection')

exports.Comment = {
    getComments: function (req, res) {
        dbConfig.Postcollection.find({id: req.body.id},{projection:{'comments':1}}).toArray(function (err, doc) {
            if (err)
                res.send({'status': 'error'})
            res.send({'status': 'success', 'doc': doc})
        });
    },
    writeComment: function (req, res) {
        var commentObj = {'name': req.body.name, 'comment': req.body.comment}
        dbConfig.Postcollection.updateOne({id: req.body.id},
            {
                $push:
                    {comments: commentObj}
            }, function (err, doc) {
                if (err)
                    res.send({'status': 'error'})
                res.send({'status': 'success', 'doc': doc})
            });
    }
}