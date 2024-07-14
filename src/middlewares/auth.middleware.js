import { catchAsyncError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const auth = catchAsyncError((req, res, next) => {
  const { token } = req.headers;
  if (!token) throw new AppError("please sign in", 409);

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) throw new AppError("invalid token", 498);
    req.user = decoded;
    next();
  });
});
