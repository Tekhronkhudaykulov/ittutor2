import { api } from "../../helpers/request";

export const newsSlice = {
  state: {
    newsList: [],
    newsById: {},
  },
  reducers: {
    getNewsListFunction: (state, payload) => {
      return {
        ...state,
        newsList: payload,
      };
    },
    getNewsByIdFunction: (state, payload) => {
      return {
        ...state,
        newsById: payload,
      };
    },
  },
  effects: {
    async getNewsListLoad() {
      const response = await api.get(`news`);
      this.getNewsListFunction(response.data.data);
    },
    async getDetailNews(id) {
      const response = await api.get(`news/view?id=${id}`);
      this.getNewsByIdFunction(response.data.data);
    },
  },
};
