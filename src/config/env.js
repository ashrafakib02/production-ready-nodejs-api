import dotenv from "dotenv";
import { cleanEnv, str, port } from "envalid";

dotenv.config();


export const env = cleanEnv(process.env, {
  NODE_ENV: str({ default: "development" }),
  PORT: port({ default: 5000 }),
  DATABASE_URL: str(),
  JWT_SECRET: str()
});