var userController = require('../Controllers/userController').UserCotroller;
module.exports = function (app) {
    app.get('/login', userController.getLoginPage)
    app.post('/login', userController.login)
    app.get('/logout', userController.logout)
}