import loadingPlugin from "@rematch/loading";
import { init } from "@rematch/core";
import { newsSlice } from "./news/newsSlice";
import { authSlice } from "./auth/authAuthSlice";
import { categorySlice } from "./category/categorySlice";
import { TeacherSlice } from "./teachers/teachersSlice";
import { directorySlice } from "./directory/directorySlice";
import { reviewsSlice } from "./reviews/reviewsSlice";

const store = init({
  models: {
    newsSlice,
    authSlice,
    categorySlice,
    TeacherSlice,
    directorySlice,
    reviewsSlice,
  },
  plugins: [loadingPlugin({ type: "full" })],
});

export default store;
