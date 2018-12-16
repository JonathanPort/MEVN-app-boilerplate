const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    hashedPassword: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});