import prisma from "../config/prisma.js";

export const createTask = async ({ title, description, status, dueDate, userId }) => {
  return prisma.task.create({
    data: {
      title,
      description,
      status,
      dueDate: dueDate ? new Date(dueDate) : null,
      userId
    }
  });
};

export const getTasksByUserId = async (userId) => {
  return prisma.task.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  });
};

export const getTaskByIdAndUserId = async (taskId, userId) => {
  return prisma.task.findFirst({
    where: {
      id: Number(taskId),
      userId
    }
  });
};