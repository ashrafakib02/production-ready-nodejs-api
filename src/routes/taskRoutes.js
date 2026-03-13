import express from "express";
import {
  createTaskHandler,
  getTasksHandler,
  getTaskByIdHandler
} from "../controllers/taskController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.post("/", authenticate, createTaskHandler);
taskRouter.get("/", authenticate, getTasksHandler);
taskRouter.get("/:id", authenticate, getTaskByIdHandler);

export default taskRouter;