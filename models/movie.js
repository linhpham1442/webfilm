var mongoose = require('mongoose');

//Movies Schema
var MovieSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    othertitle: {
        type: String,
        require: true
    },
    plot: {
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
    category: [{
        type: mongoose.Types.ObjectId,
        ref: 'category'
    }],
    countries: {
        type: String
    },
    duration: {
        type: String
    },
    quality: String,
    status: String,
    views: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    }],
    release: {
        type: Date
    },
}, { timestamps: true })

var Movie = module.exports = mongoose.model('Movie', MovieSchema);