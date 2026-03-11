import  express  from 'express';
import task from './../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.get("/", task);

export default taskRouter