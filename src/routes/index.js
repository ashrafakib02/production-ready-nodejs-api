import express  from 'express';
import getHealthStatus from '../controllers/healthController.js';
import authRouter from "./authRoutes.js"
import taskRouter from "./taskRoutes.js"
import dbRouter from './dbRoutes.js';
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.get("/health", getHealthStatus);
router.use("/auth", authRouter);
router.use("/task", taskRouter)
router.use("/db", dbRouter)
router.use("/users", userRoutes);
export default router;