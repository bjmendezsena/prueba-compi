import { apiInstance } from "./api";

const get = async (url = "") => {
  return await apiInstance.get(url);
};

export const httpManager = {
  get,
};
