import Task from "../../../database/models/task.model.js";

export const getAllTasks = catchAsyncError(async (req, res) => {
  const tasks = await Task.find().populate("categoryId");
  res.json({ message: tasks });
});

export const addTask = catchAsyncError(async (req, res) => {
  const { title, type, content, Shared, categoryId } = req.body;
  const data = await Task.create({
    title,
    type,
    content,
    Shared,
    categoryId,
    userId: req.user.id,
  });
  res.status(201).json({ message: "Added Successfully", data });
});

export const updateTask = catchAsyncError(async (req, res) => {
  const result = await Task.findByIdAndUpdate(req.params.taskId, req.body);
  res.json({ message: "Task Updated Successfully", result });
});

export const deleteTask = catchAsyncError(async (req, res) => {
  await Task.findByIdAndDelete(req.params.taskId, req.body);
  res.json({ message: " Deleted Successfully" });
});

export const filterBySharedOption = catchAsyncError(async (req, res) => {
  const { Shared } = req.query;
  const filtered = await Task.find({ Shared });
  res.json({ message: filtered });
});

export const sortBySharedOption = catchAsyncError(async (req, res) => {
  const sorted = await Task.find({}).sort({ Shared: 1 });
  res.json({ message: sorted });
});
