const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
// var config = require('./config/database');
var session = require('express-session')
var router = express.Router();
// const morgan = require('morgan')


//Init app 
var app = express();

//Connect to db
// mongoose.connect(config.database)
mongoose.connect('mongodb://localhost/pipifilm', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB')
});

//Set public folder
var publicDir = require('path').join(__dirname, 'public');
app.use(express.static(publicDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//HTTP logger
// app.use(morgan('combined'));
// const route = require('./routes')

//View engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

//Express-Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

//Express-Messages middleware
app.use(require('connect-flash')());
app.use(function(req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//Set routes
var pages = require('./routes/pages.js');
var adminPages = require('./routes/admin_pages.js');
var adminCategories = require('./routes/admin_categories.js');
var admin = require('./routes/admin.js')

app.use('/admin/pages', adminPages);
app.use('/admin/categories', adminCategories);
app.use('/admin', admin);
app.use('/', pages);

//Start the server
const port = 3000
app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})