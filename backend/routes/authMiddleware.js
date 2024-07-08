const path = require('path');

module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(404).sendFile(path.resolve(__dirname, '../frontend/notfound.html'));
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) {
        next();
    } else {
        res.status(404).sendFile(path.resolve(__dirname, '../frontend/notfound.html'));
    }
}