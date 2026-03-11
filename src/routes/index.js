import express  from 'express';
import getHealthStatus from '../controllers/healthController.js';
import authRouter from "./authRoutes.js"
import taskRouter from "./taskRoutes.js"


const router = express.Router();

router.get("/health", getHealthStatus);
router.use("/auth", authRouter);
router.use("/task", taskRouter)

export default router;