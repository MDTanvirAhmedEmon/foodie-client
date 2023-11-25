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
    paymentInit: builder.mutation({
      query: (data) => ({
        url: `/payment/payment-init`,
        method: "POST",
        body: data,
      }),
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

export const { useUpdateUserMutation, useMakeOrderMutation, useGetMyOrderQuery, useGetSingleOrderQuery, useGetAllOrderQuery, useUpdateOrderMutation, usePaymentInitMutation, useGetLatestOrderQuery } = orderApi;
