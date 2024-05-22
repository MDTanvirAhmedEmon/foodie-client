import { api } from "../../api/apiSlice";


const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    makePaymentInit: builder.mutation({
      query: (data) => ({
        url: `/payment/init`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useMakePaymentInitMutation } = userApi;
