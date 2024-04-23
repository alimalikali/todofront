
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todoback-nine.vercel.app/api/todos",
    prepareHeaders: (headers) => {
      const user = localStorage.getItem("user");
      const parsedUser = user ? JSON.parse(user) : null;
      const { token } = parsedUser?.data;
      console.log(token, "token");

      if (typeof token === "string" && token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "/",
      method: "GET",
      providesTags: ["Todos"],
    }),
    getTodo: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: `/`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, title }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: { title },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
export const {
  useGetAllTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;

export { apiSlice };
