import { api, configToken, formData } from "../../helpers/request";

export const reviewsSlice = {
  state: {
    reviewsList: [],
  },
  reducers: {
    getAllReviewsFunction: (state, payload) => {
      return {
        ...state,
        reviewsList: payload,
      };
    },
  },
  effects: {
    async getReviewSlice() {
      const response = await api.get(`review`);
      this.getAllReviewsFunction(response.data.data);
    },
    async postNewReviews(payload) {
      const response = await api.post(
        `/review/send`,
        formData(payload),
        configToken
      );
      console.log(response);
    },
  },
};
