const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: String,
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
