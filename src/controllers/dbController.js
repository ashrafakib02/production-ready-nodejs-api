import prisma from "../config/prisma.js";

export const checkDatabase = async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "ok",
      message: "Database connected successfully"
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Database connection failed",
      error: error.message
    });
  }
};