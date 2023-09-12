import { configureStore } from "@reduxjs/toolkit";
import recommendationsReducer from "./reducers/recommendationsReducer";
import searchReducer from "./reducers/searchReducer";
import playingReducer from "./reducers/playingReducer";

const store = configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    search: searchReducer,
    playing: playingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
