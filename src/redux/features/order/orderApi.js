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

    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['order'],
    }),
    getMyOrder: builder.query({
      query: () => `/order/my-order`,
    }),
    getAllOrder: builder.query({
      query: (page) => `/order?page=${page}`,
      providesTags: ['order'],
    }),
    getLatestOrder: builder.query({
      query: () => `/order/latest-order`,
      providesTags: ['order'],
    }),
    getSingleOrder: builder.query({
      query: (id) => `/order/${id}`,
      providesTags: ['order'],
    }),
  }),
});

export const { useUpdateUserMutation, useGetMyOrderQuery, useGetSingleOrderQuery, useGetAllOrderQuery, useUpdateOrderMutation, useGetLatestOrderQuery } = orderApi;
