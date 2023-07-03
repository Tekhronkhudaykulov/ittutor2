import { api } from "../../helpers/request";

export const directorySlice = {
  state: {
    country: [],
    directionList: [],
    region: [],
  },
  reducers: {
    getCountryFunction: (state, payload) => {
      return {
        ...state,
        country: payload,
      };
    },
    getDirectionFunction: (state, payload) => {
      return {
        ...state,
        directionList: payload,
      };
    },
    getRegionByIdFunction: (state, payload) => {
      return {
        ...state,
        region: payload,
      };
    },
  },
  effects: {
    async getCountryLoad() {
      const response = await api.get(`/category/country`);
      this.getCountryFunction(response.data.data);
    },
    async getDirectionLoad() {
      const response = await api.get(`/category?type=direction`);
      this.getDirectionFunction(response.data.data);
    },
    async getRegionByIdLoad(id) {
      const response = await api.get(`/category/region?country_id=${id}`);
      this.getRegionByIdFunction(response.data.data);
    },
  },
};
