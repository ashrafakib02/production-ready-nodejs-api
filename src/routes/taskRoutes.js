import express from "express";
import {
  createTaskHandler,
  getTasksHandler,
  getTaskByIdHandler,
  updateTaskHandler,
  deleteTaskHandler
} from "../controllers/taskController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const taskRouter = express.Router();
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 */
taskRouter.post("/", authenticate, createTaskHandler);
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 * 
 */
taskRouter.get("/", authenticate, getTasksHandler);
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags: [Tasks]
 */
taskRouter.get("/:id", authenticate, getTaskByIdHandler);
taskRouter.patch("/:id", authenticate, updateTaskHandler);
taskRouter.delete("/:id", authenticate, deleteTaskHandler);
export default taskRouter;