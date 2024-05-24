import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foodie-server-red.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userToken.token;
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "order", "product"],
  endpoints: () => ({}),
});
