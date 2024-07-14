import joi from "joi";

export const addCategorySchema = joi.object({
  name: joi.string().required(),
});

export const updateCategorySchema = joi.object({
  name: joi.string().required(),
});
