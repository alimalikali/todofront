import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";
import { userReducer } from "./reducers/usersReducers";
import { userApi } from "./api/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,

    [userReducer.name]: userReducer.reducer,
  },
  // Add the middleware for RTK-Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(userApi.middleware),
});

setupListeners(store.dispatch);

export {
  useGetAllTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "./api/apiSlice";
export { apiSlice } from "./api/apiSlice";
