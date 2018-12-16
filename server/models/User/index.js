const mongoose = require('mongoose');
const wrapper = require('mongoose-class-wrapper');
const schema = require('./schema');
const bcrypt = require('bcrypt-nodejs');

class User {

    get password() {
        return this.hashedPassword;
    }

    set password(password) {
        this._plainPassword = password;
        this.hashedPassword = this.encryptPassword(password);
    }

    encryptPassword(password) {
        return bcrypt.hashSync(password);
    }

    // Example
    static findByEmail(email, cb) {
        return this.findOne({ email: email }, cb);
    }

}

schema.plugin(wrapper, {target: User});

module.exports = mongoose.model('User', schema);