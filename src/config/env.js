import dotenv from "dotenv";
import { cleanEnv, str, port } from "envalid";

dotenv.config();

const isTest = process.env.NODE_ENV === "test";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ default: "development" }),
  PORT: port({ default: 5000 }),
  DATABASE_URL: str({
    default: isTest
      ? "postgresql://postgres:postgres@localhost:5432/test_db?schema=public"
      : undefined
  }),
  JWT_SECRET: str({
    default: isTest ? "test_jwt_secret" : undefined
  })
});