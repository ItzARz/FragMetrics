const express = require('express');
const session = require('express-session');
const passport = require('passport');
const statsRoutes = require('./routes/statsRoutes');
const authRoutes = require('./routes/authRoutes');
require('./config/passport');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());
app.use(session({
    secret: config.AUTH_SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: config.IS_PRODUCTION },
}));
app.use(passport.initialize());
app.use(passport.session());

// API Routes
app.use('/api/stats', statsRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/auth/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
