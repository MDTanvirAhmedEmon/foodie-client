import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    logInUser: builder.mutation({
        query: (data) => ({
          url: `/auth/login`,
          method: "POST",
          body: data,
        }),
      }),
    createUser: builder.mutation({
        query: (data) => ({
          url: `/users/create-user`,
          method: "POST",
          body: data,
        }),
      }),
  }),
});

export const { useLogInUserMutation, useCreateUserMutation } = userApi;