const express = require('express');
const passport = require('passport');
const router = express.Router();
const config = require('../config');

router.get('/', passport.authenticate('steam', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/profile');
});

router.get('/return',
    passport.authenticate('steam', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.send({
            steamId64: req.user.id,
            name: req.user.displayName,
            profilePicture: req.user.avatar,
        });
    } else {
        res.redirect('/api/auth');
    }
});

module.exports = router;
