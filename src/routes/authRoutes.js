import  express  from 'express';
import {register, login } from './../controllers/authController.js';
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many login attempts"
  }
});

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login",loginLimiter, login);

export default authRouter