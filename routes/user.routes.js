module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/api/user', user.create);

    // Retrieve all Users
    app.get('/api/user', user.findAll);

    //delete all users
    app.delete('/api/user', user.deleteAll);

    // Retrieve a single User with UserId
    app.get('/api/user/:userId', user.findOne);

    // Update a User with UserId
    app.put('/api/user/:userId', user.update);

    // Delete a User with UserId
    app.delete('/api/user/:userId', user.delete);
}