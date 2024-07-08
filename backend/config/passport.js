const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const { validPassword } = require('../lib/passwordUtils');


const verifyInfo = (username, password, done) => {

    User.findOne({ username: username })
    .then((user) => {

        if (!user) { return done(null, false, { message: 'Incorrect Email' }); }
        
        const isValid = validPassword(password, user.hash, user.salt);
        
        if (isValid) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect Password' });
        }
    })
    .catch((err) => {   
        done(err);
    });

}

const strategy  = new LocalStrategy(verifyInfo);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
    .then((user) => {
        done(null, user);
    })
    .catch(err => done(err))
});