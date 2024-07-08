const router = require('express').Router();
const path = require('path');
const passport = require('passport');
const { genPassword } = require('../lib/passwordUtils');
const connection = require('../config/database');
const User = connection.models.User;
const { isAuth, isAdmin } = require('./authMiddleware');

//Pages that can be viewed either authenticated or not

//Home page
router.get('/', (req, res, next) => {
    if(req.isAuthenticated()){
        res.render('main', {title: 'Scope Technolgies'});
    }
    else{
        res.status(200).sendFile(path.resolve(__dirname, '../frontend/home.html'));
    }
})

//Signup page
router.get(['/signup', '/sign-up'], (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    else{
        res.status(200).sendFile(path.resolve(__dirname, '../frontend/signup.html'))
    }
})

//Login page
router.get(['/login', '/log-in'], (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    else{
        res.status(200).sendFile(path.resolve(__dirname, '../frontend/login.html'))
    }
})

//About page
router.get(['/about','/about-us'], (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../frontend/about.html'))
})

//Personal page
router.get('/personal', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../frontend/personal.html'))
})

//Corporate page
router.get('/corporate', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../frontend/corporate.html'))
})

//Help page
router.get('/help', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../frontend/help.html'))
})

// Since we are using the passport.authenticate() method, we should be redirected no matter what 
router.post('/login', passport.authenticate('local', { failureMessage: true, successRedirect: '/' }));

router.post('/signup', async (req, res, next) => {
    try {
        const registeredUser = req.body;

        const userFirstName = registeredUser.firstname;
        const userLastName = registeredUser.lastname;
        const userEmail = registeredUser.email;
        const userPassword = registeredUser.password;

        const capitalizedFirstName = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1).toLowerCase();
        const capitalizedLastName = userLastName.charAt(0).toUpperCase() + userLastName.slice(1).toLowerCase();
        const processedEmail = userEmail.toLowerCase()

        const registeredUserUsername = await User.findOne({username: registeredUser.email});


        if(registeredUserUsername){
            return res.status(400).json({message: 'An account already exist with this email'});
        }

        if(userPassword.length < 8){
            return res.status(400).json({message: 'Password length must be 8 or more'});
        }

        //Check if the password is any of this unsecure password
        const notSecurePasswordList = ['12345678','87654321','123456789','987654321','password','password123','Password',
            'PASSWORD'
        ];

        for(passwords in notSecurePasswordList){
            if(userPassword === notSecurePasswordList[passwords]){
                return res.status(400).json({message: 'Password not accepted, Use a more secure password'});
            }
        }

        const saltHash = genPassword(userPassword);
        
        const salt = saltHash.salt;
        const hash = saltHash.hash;
    
        const newUser = new User({
            firstname: capitalizedFirstName,
            lastname: capitalizedLastName,
            gender: registeredUser.gender,
            username: processedEmail,
            hash: hash,
            salt: salt
        });
    
        try {
            const savedUser = await newUser.save()
        } catch (error) {
            return res.status(500).json({'error': error})
        }
    
        res.redirect('/login');

    } catch (error) {
        res.status(500).json({message: error})
        next(error)
    }
    //email = abgail@gmail.com & mark@gmail.com
    //password = contraband & sequences
});

//-------------- Routes that you need to be authenticated to access ----------------

// This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant

router.get('/settings', isAuth, (req, res, next) => {
    res.render('settings', {title: 'Scope Technologies'})
});

router.get('/admin-route', isAdmin, (req, res, next) => {
    res.send('You made it to the admin route.');
});

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

//Notfound page
router.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, '../frontend/notfound.html'))
})

module.exports = router;