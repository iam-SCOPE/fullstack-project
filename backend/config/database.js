const mongoose = require('mongoose');
require('dotenv').config();

//-------------- DATABASE ----------------
// Connect to MongoDB Server using the connection string in the `.env` file.

const conn = process.env.DB_AUTH;

const connection = mongoose.createConnection(conn);

connection.on('connected', () => {
    console.log('Mongoose connection succesful')
})

connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
})

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: String, required: true},
    kyc_level: {type: Number, default: 0},
    referral: {type: String, default: 'nobody'},
    username: {type: String, required: true, unique: true},
    hash: {type: String, required: true},
    salt: {type: String, required: true},
    admin: {type: Boolean, default: false}
});


const User = connection.model('User', UserSchema);

// Expose the connection
module.exports = connection;