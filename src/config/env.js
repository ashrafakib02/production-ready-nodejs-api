// require("dotenv").config();

export const port = process.env.PORT || 5000;
export const nodeEnv = process.env.NODE_ENV || "development";
export const databaseUrl = process.env.DATABASE_URL;
export const jwtSecret = process.env.JWT_SECRET || "change_this_secret";