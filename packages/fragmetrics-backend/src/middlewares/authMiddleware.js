const passport = require('passport');

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/api/auth');
};

/*exports.authenticateMiddleware = (req, res, next) => {
    passport.authenticate('steam', { session: false }, (err, user, info) => {
        if (err) {
            console.error('Error authenticating user:', err);
            return res.status(500).json({ error: err?.message || err });
        }
        if (!user) {
            return res.status(401).json({ error: info?.message || 'Authentication failed' });
        }
        // Asignar el usuario a req.user para usarlo en las siguientes rutas
        req.user = user;
        next();
    })(req, res, next);
};*/
