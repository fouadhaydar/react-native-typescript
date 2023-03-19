import { configureStore } from "@reduxjs/toolkit";
import categorieReducer from "../dataControll/categorieSlice";
import clothesReducer from "../dataControll/clothesSlice";
import userReducer from "../dataControll/userSlice"


export const store = configureStore({
  reducer: {
    categorie: categorieReducer,
    clothes:clothesReducer,
    userData:userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
