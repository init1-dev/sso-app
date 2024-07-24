import { configDotenv } from "dotenv";
import { Secret } from "jsonwebtoken";

configDotenv();

const SESSION_SECRET: Secret = process.env.SESSION_SECRET || "default_secret";
const GOOGLE_CLIENT_SECRET: Secret = process.env.GOOGLE_CLIENT_SECRET || "";

const config = {
    SESSION_SECRET: String(SESSION_SECRET),
    GOOGLE_CLIENT_SECRET: String(GOOGLE_CLIENT_SECRET),
}

export default config;