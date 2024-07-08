const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const path = require('path');
let passport = require('passport');
let routes = require('./routes');
const MongoStore = require('connect-mongo');
const app = express();
require('dotenv').config(); //Require variables in the .env file
const port = process.env.PORT || 5000;

// Configure Handlebars
const hbs = handlebars.create({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: path.join(__dirname, 'views', 'partials'),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
});

app.use(express.static('public'));//Load static files
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine);
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//    SESSION SETUP
const sessionStore = MongoStore.create({ mongoUrl: process.env.DB_AUTH, collection: 'sessions' });

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // Equals 7 days
    }
}));

// Need to require the entire Passport config module so server.js knows about it
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

// Middleware to make user data available in all views
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use(routes)

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})