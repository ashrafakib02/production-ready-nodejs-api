import express from "express";
import { checkDatabase } from "../controllers/dbController.js";

const dbRouter = express.Router();
/**
 * @swagger
 * /db/status:
 *   get:
 *     summary: Check database connection status
 *     tags: [Database]
 *     description: Verifies if the application can successfully connect to the PostgreSQL database.
 *     responses:
 *       200:
 *         description: Database connection successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Database connected successfully
 *       500:
 *         description: Database connection failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   example: Connection timeout or invalid credentials
 */
dbRouter.get("/status", checkDatabase);

export default dbRouter;