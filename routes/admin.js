const { urlencoded } = require('body-parser');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('admin/admin', {
        admintitle: 'Dashboard'
    });
})

module.exports = router;