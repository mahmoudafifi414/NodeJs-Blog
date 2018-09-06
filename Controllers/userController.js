var User = require('../models/User').User
var path = require('path')
var bcrypt = require('bcryptjs');

exports.UserCotroller = {
    getLoginPage: function (req, res) {
        res.render(path.join(__dirname, '..', 'ClientSide/login.ejs'));
    },
    login:function (req,res) {
        User.login(req,res)
    },
    logout:function (req,res) {
        User.logout(req,res)
    }
    
}