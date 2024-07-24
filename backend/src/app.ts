import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import session from 'express-session';
import cors from 'cors';
import config from './utils/getEnv';
import corsOptions from './utils/corsOptions';


export const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

const client = new OAuth2Client();

app.post("/google-auth", async (req, res) => {
    const { credential, client_id } = req.body;
    
    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: client_id
        });
        const payload = ticket.getPayload();
        const user = {
            id: payload?.sub,
            name: payload?.name,
            email: payload?.email,
            picture: payload?.picture
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).json({ error: 'Invalid token' });
    }
})