import { Router } from "express";
import {
  getAllTasks,
  addTask,
  sortBySharedOption,
  updateTask,
  deleteTask,
  filterBySharedOption,
} from "./task.controllers.js";
const tasksRouter = Router();

tasksRouter.route("/").get(getAllTasks).post(auth, addTask);

tasksRouter
  .route("/:taskId")
  .put(auth, taskMiddleware, updateTask)
  .delete(auth, taskMiddleware, deleteTask);

tasksRouter.get("/filter", auth, filterBySharedOption);

tasksRouter.get("/sort", auth, sortBySharedOption);
export default tasksRouter;
