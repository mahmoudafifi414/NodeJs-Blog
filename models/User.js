var mongoClient = require('mongodb').MongoClient
var dbConfig = require('../Config/dbConnection')
var bcrypt=require('bcryptjs')

exports.User = {
    login: function (req, resp) {
        dbConfig.UserCollection.findOne({
            email: req.body.email,
        }, function (err, doc) {
            if (err) {
                resp.send({'status': 'error'})
            } else {
                if (doc !== null) {
                    bcrypt.compare(req.body.password, doc.password, function(err, res) {
                        if (err) console.log('error')
                        if (res === true){
                            req.session.name = doc.name
                            console.log(req.session.name)
                            resp.redirect('/')
                        }else {
                            resp.redirect('/login')
                        }
                    });

                } else {
                    resp.redirect('/login')
                }
            }
        });
    },
    logout: function (req, res) {
        req.session.destroy(function (err) {
            if (err)
                res.send({'status': 'error'})
            res.redirect('/')
        })
    }
}