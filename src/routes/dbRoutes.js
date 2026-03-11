import express from "express";
import { checkDatabase } from "../controllers/dbController.js";

const dbRouter = express.Router();

dbRouter.get("/status", checkDatabase);

export default dbRouter;