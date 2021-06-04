const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

var publicDir = require('path').join(__dirname, 'public');
app.use(express.static(publicDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
    //HTTP logger
app.use(morgan('combined'));
// const route = require('./routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

//Routes init
// route(app);

app.get("/", function(req, res) {
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})