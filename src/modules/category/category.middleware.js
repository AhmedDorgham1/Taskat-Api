import Category from "../../../database/models/category.model.js";
import { catchAsyncError } from "../../utils/error.js";

const categoryMiddleware = catchAsyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);
  if (category.userId.toString() != req.user.id)
    throw new AppError("You do not own this category", 400);

  next();
});

export default categoryMiddleware;
