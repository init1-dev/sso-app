import { configDotenv } from "dotenv";
import { Secret } from "jsonwebtoken";

configDotenv();

const SESSION_SECRET: Secret = process.env.SESSION_SECRET || "default_secret";
const GOOGLE_CLIENT_ID: Secret = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET: Secret = process.env.GOOGLE_CLIENT_SECRET || "";
const CALLBACK_URL: Secret = process.env.CALLBACK_URL || "";

const config = {
    SESSION_SECRET: String(SESSION_SECRET),
    GOOGLE_CLIENT_ID: String(GOOGLE_CLIENT_ID),
    GOOGLE_CLIENT_SECRET: String(GOOGLE_CLIENT_SECRET),
    CALLBACK_URL: String(CALLBACK_URL)
}

export default config;