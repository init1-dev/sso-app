import { configDotenv } from "dotenv";
import { Secret } from "jsonwebtoken";

configDotenv();

const SESSION_SECRET: Secret = process.env.SESSION_SECRET || "default_secret";

const config = {
    SESSION_SECRET: String(SESSION_SECRET)
}

export default config;