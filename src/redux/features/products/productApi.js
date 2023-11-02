import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getSingleUser: builder.query({
      query: () => `/users/single-user`,
      providesTags: ['user'],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetSingleUserQuery} = productApi;