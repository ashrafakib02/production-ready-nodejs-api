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

// export const getTasksByUserId = async (userId) => {
//   return prisma.task.findMany({
//     where: { userId },
//     orderBy: { createdAt: "desc" }
//   });
// };

export const getTaskByIdAndUserId = async (taskId, userId) => {
  return prisma.task.findFirst({
    where: {
      id: Number(taskId),
      userId
    }
  });
};
export const updateTaskById = async (taskId, userId, data) => {
  const existingTask = await prisma.task.findFirst({
    where: {
      id: Number(taskId),
      userId
    }
  });

  if (!existingTask) {
    return null;
  }

  return prisma.task.update({
    where: { id: Number(taskId) },
    data: {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate) : undefined
    }
  });
};
export const deleteTaskById = async (taskId, userId) => {
  const existingTask = await prisma.task.findFirst({
    where: {
      id: Number(taskId),
      userId
    }
  });

  if (!existingTask) {
    return null;
  }

  await prisma.task.delete({
    where: { id: Number(taskId) }
  });

  return existingTask;
};
export const getTasksByUserIdWithQuery = async (
  userId,
  { page, limit, status, sortBy, sortOrder, search }
) => {
  const skip = (page - 1) * limit;

  const where = {
    userId,
    ...(status ? { status } : {}),
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } }
          ]
        }
      : {})
  };

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where,
      orderBy: {
        [sortBy]: sortOrder
      },
      skip,
      take: limit
    }),
    prisma.task.count({ where })
  ]);

  return {
    tasks,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
};