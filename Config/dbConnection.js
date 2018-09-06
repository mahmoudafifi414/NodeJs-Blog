var mongoClient = require('mongodb').MongoClient

var url='mongodb://localhost/blog'

exports.Postcollection=null

exports.UserCollection=null
//ensure one instance in whole application and not inialize more than one instance form DB connection and also for evey collection
if (exports.Postcollection == null || exports.UserCollection==null){
    mongoClient.connect(url, function (err, database) {
        if (err) console.log('error')
        dbInstance = database.db('blog')
        exports.Postcollection = dbInstance.collection('posts')
        exports.UserCollection = dbInstance.collection('Users')
    });

}
