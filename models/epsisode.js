var mongoose = require('mongoose');

//Page Scheme
var EpsisodeSchema = mongoose.Schema({

    movie_id: {
        type: mongoose.Types.ObjectId,
        ref: 'movie'
    },
    ep: {
        type: String,
        require: true
    },
    video_link: {
        type: String,
        require: true
    }
})
var Epsisode = module.exports = mongoose.model('Epsisode', EpsisodeSchema);