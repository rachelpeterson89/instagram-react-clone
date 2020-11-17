const LogRegController = require('../controllers/auth.controller'),
    UserController = require('../controllers/user.controller'),
    {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/register', LogRegController.register);
    app.post('/api/login', LogRegController.login);
    app.get('/api/users', authenticate, UserController.index);
    app.get('/api/logout', authenticate, LogRegController.logout);
    app.get('/api/user/:id', UserController.show);
    app.put('/api/user/update/:id', UserController.update);
    app.delete('/api/user/delete/:id', UserController.destroy);
}