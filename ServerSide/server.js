var express = require('express')
var app = express()
var path = require('path')
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session(
    {
        secret: 'mysupersecret',
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 1000000 * 400 * 400}
    }
));
app.use(function (req, res, next) {
    res.locals.auth = req.session.name;
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'assets')));
app.use(express.static(path.join(__dirname, '..', 'ClientSide')));
app.set('view engine', 'ejs')

var postsRoute = require('../routes/postRoute')(app);
var commentsRoute = require('../routes/commentRoute')(app);
var usersRoute = require('../routes/userRoutes')(app);

//home page
app.get('/', function (req, res) {
    res.render(path.join(__dirname, '..', 'ClientSide/home.ejs'));
});

server.listen(3000);

