var mongoose = require('mongoose');

//Page Scheme
var WishlistSchema = mongoose.Schema({

    movie_id: {
        type: mongoose.Types.ObjectId,
        ref: 'movie'
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
})
var Wishlist = module.exports = mongoose.model('Wishlist', WishlistSchema);