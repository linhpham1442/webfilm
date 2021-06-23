var mongoose = require('mongoose');

//Page Scheme
var PageSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    content: {
        type: String,
        require: true
    },
    sorting: {
        type: Number,
        require: true
    }
})

var Page = module.exports = mongoose.model('Page', PageSchema);