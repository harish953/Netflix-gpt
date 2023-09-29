import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import userSliceStore from "./userSliceStore";
import gptReducer from "./gptSlice";
import movieReducer from "./movieSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
