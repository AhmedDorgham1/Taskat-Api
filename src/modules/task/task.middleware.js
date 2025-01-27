import Task from "../../../database/models/task.model.js";
import { AppError } from "../../utils/error.js";

const taskMiddleware = async (req, res, next) => {
  const task = await Task.findById(req.params.taskId);
  if (task.userId.toString() != req.user.id)
    throw new AppError("you do not own this Task", 400);

  next();
};

export default taskMiddleware;
