import { createTaskSchema } from "../validators/taskValidator.js";
import {
  createTask,
  getTaskByIdAndUserId
} from "../services/taskService.js";
import { updateTaskSchema } from "../validators/taskValidator.js";
import { updateTaskById, deleteTaskById } from "../services/taskService.js";
import { getTasksByUserIdWithQuery } from "../services/taskService.js";
import { taskQuerySchema } from '../validators/taskQueryValidator.js';

export const createTaskHandler = async (req, res) => {
  try {
    const validatedData = createTaskSchema.parse(req.body);

    const task = await createTask({
      ...validatedData,
      userId: req.user.userId
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};

export const getTasksHandler = async (req, res) => {
  try {
    const query = taskQuerySchema.parse(req.query);

    const result = await getTasksByUserIdWithQuery(req.user.userId, query);

    res.status(200).json({
      message: "Tasks fetched successfully",
      ...result
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};

export const getTaskByIdHandler = async (req, res) => {
  try {
    const task = await getTaskByIdAndUserId(req.params.id, req.user.userId);

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task fetched successfully By Id And UserId",
      task
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};
export const updateTaskHandler = async (req, res) => {
  try {
    const validatedData = updateTaskSchema.parse(req.body);

    const updatedTask = await updateTaskById(
      req.params.id,
      req.user.userId,
      validatedData
    );

    if (!updatedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};
export const deleteTaskHandler = async (req, res) => {
  try {
    const deletedTask = await deleteTaskById(
      req.params.id,
      req.user.userId
    );

    if (!deletedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};
