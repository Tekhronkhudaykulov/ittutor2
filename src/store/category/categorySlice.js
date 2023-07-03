import { api } from "../../helpers/request";

export const categorySlice = {
  state: {
    categoryList: [],
  },
  reducers: {
    getCategoryListFunciton: (state, payload) => {
      return {
        ...state,
        categoryList: payload,
      };
    },
  },
  effects: {
    async getCategoryLoad() {
      const response = await api.get(`/category?type=direction`);
      this.getCategoryListFunciton(response.data.data);
    },
  },
};
