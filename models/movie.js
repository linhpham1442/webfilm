var mongoose = require('mongoose');

//Movies Schema
var MovieSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    othertitle: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    desciption: {
        type: String,
        require: true
    },
    poster: {
        type: String,
        require: true
    },
    banner: {
        type: String
    },
    type: {
        type: Number
    },
    countries: [{
        type: String
    }],
    duration: {
        type: String
    },
    category: [{
        type: mongoose.Types.ObjectId,
        ref: 'category'
    }],
    quality: String,
    status: String,
    views: {
        type: Number,
        default: 0
    },
    release: {
        type: Date
    },
    num_comments: {
        type: Number,
        default: 0
    },
    num_ep: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

var Movie = module.exports = mongoose.model('Movie', MovieSchema);