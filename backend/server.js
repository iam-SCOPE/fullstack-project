const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const logger = (req, res, next) => {
    const today = new Date(); 
    const day= today.getDate(); 
    const month = today.getMonth() + 1; 
    const year = today.getFullYear();
    console.log(day, '/', month, '/', year);
    console.log(req.method, req.url)
    next();
}

app.use(logger)
app.use(express.static('../frontend'))


//Home page
app.get(['/','/home'], (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/index.html'))
    console.log('User is on Homepage')
})

//Signup page
app.get(['/signup', '/sign-up'], (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/signup.html'))
    console.log('User is on Signup page')
})

//Login page
app.get(['/login', '/log-in'], (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/login.html'))
    console.log('User is on Login page')
})

//About page
app.get(['/about','/about-us'], (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/about.html'))
    console.log('User is on the About page')
})

//Personal page
app.get('/personal', (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/personal.html'))
    console.log('User is on the Personal page')
})

//Corporate page
app.get('/corporate', (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/corporate.html'))
    console.log('User is on the Corporate page')
})

//Help page
app.get('/help', (req, res) => {
    res.status(200).sendFile(path.resolve('../frontend/help.html'))
    console.log('User is on the help page')
})

//Notfound page
app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve('../frontend/notfound.html'))
    console.log('User is trying to access an invalid resource')
})



app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
})