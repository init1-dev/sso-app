import express, { Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import cors from 'cors';
import config from './utils/getEnv';
import corsOptions from './utils/corsOptions';

export const app = express();

app.use(cors(corsOptions));
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.CALLBACK_URL
},
    function (_accessToken, _refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((obj: any, done) => {
    done(null, obj);
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (_req: Request, res: Response) => {
        res.redirect('/profile');
    }
);

app.get('/profile', (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).send('You are not authenticated');
    }
});

app.get('/logout', (req: Request, res: Response) => {
    req.logout((err: any) => {
        if (err) {
            return res.status(500).send('Logout failed');
        }
    });
    res.redirect('/');
});