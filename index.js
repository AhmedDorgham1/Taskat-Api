import express from "express";
import userRouter from "./src/modules/user/user.routes.js";
import "./database/connection.js";
import categoryRouter from "./src/modules/category/category.routes.js";

process.on("uncaughtException", () => {
  console.log("Error");
});

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRouter);
app.use("/categories", categoryRouter);

app.use((err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({ message: message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

process.on("unhandledRejection", () => {
  console.log("Error");
});
