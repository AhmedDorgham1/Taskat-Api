import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/TaskManager")
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
