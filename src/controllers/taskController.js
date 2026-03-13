import { createTaskSchema } from "../validators/taskValidator.js";
import {
  createTask,
  getTasksByUserId,
  getTaskByIdAndUserId
} from "../services/taskService.js";

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
    const tasks = await getTasksByUserId(req.user.userId);

    res.status(200).json({
      message: "Tasks fetched successfully",
      tasks
    });
  } catch (error) {
    res.status(500).json({
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