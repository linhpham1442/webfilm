var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
})

router.get('/categories', function(req, res) {
    res.render('categories', {
        title: 'Categories'
    });
})

router.get('/blog', function(req, res) {
    res.render('blog', {
        title: 'Blog'
    });
})

router.get('/blog-details', function(req, res) {
    res.render('blog-details', {
        title: 'Blog details'
    });
})

router.get('/login', function(req, res) {
    res.render('login', {
        title: 'Login'
    });
})

router.get('/signup', function(req, res) {
    res.render('signup', {
        title: 'Signup'
    });
})

router.get('/profile', function(req, res) {
    res.render('profile', {
        title: 'Profile'
    });
})

//Express
module.exports = router;