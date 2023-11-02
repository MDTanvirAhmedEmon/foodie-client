import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/update-user/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['user'],
    }),
    makeOrder: builder.mutation({
      query: (data) => ({
        url: `/order/make-order`,
        method: "POST",
        body: data,
      }),
    }),
    getMyOrder: builder.query({
      query: () => `/order`,
    }),
    getSingleOrder: builder.query({
      query: (id) => `/order/${id}`,
    }),
  }),
});

export const { useUpdateUserMutation, useMakeOrderMutation, useGetMyOrderQuery, useGetSingleOrderQuery } = orderApi;
