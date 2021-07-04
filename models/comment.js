const mongoose = require('mongoose');

const CommentSchema = new Schema({

    body: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    date: {
        type: Date,
        default: Date.now()
    }


});

var Comment = module.exports = mongoose.model('Comment', CommentSchema);