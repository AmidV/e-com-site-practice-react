import { CATEGORY_ACTION_TYPE } from "./category.types";

export const setCategories = (categoriesArray) => {
  return {
    type: CATEGORY_ACTION_TYPE.SET_CATEGORIES,
    payload: categoriesArray,
  };
};
