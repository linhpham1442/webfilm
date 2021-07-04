var mongoose = require('mongoose');

//Page Scheme
var UserSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String
    },

    password: {
        type: String,
        required: true
    }

})

var User = module.exports = mongoose.model('User', UserSchema);