import { Router } from "express";

import {
  addCategory,
  deleteCategory,
  filterByName,
  getAllCategories,
  sortByName,
  updateCategory,
} from "./category.controllers.js";
import { auth } from "../../middlewares/auth.middleware.js";
import categoryMiddleware from "./category.middleware.js";
import validate from "../../middlewares/validate.middleware.js";
import {
  addCategorySchema,
  updateCategorySchema,
} from "./category.validations.js";

const categoryRouter = Router();

categoryRouter
  .route("/")
  .get(auth, getAllCategories)
  .post(auth, validate(addCategorySchema), addCategory);

categoryRouter
  .route("/:categoryId")
  .put(auth, categoryMiddleware, validate(updateCategorySchema), updateCategory)
  .delete(auth, categoryMiddleware, deleteCategory);

categoryRouter.get("/filter", auth, filterByName);
categoryRouter.get("/sort", auth, sortByName);

export default categoryRouter;
