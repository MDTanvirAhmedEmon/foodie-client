import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`
    }),
  }),
})


export const { useGetProductsQuery, useGetSingleProductQuery } = api;