import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({

    updateUser: builder.mutation({
        query: ({id, data}) => ({
            url: `/users/update-user/${id}`,
            method: 'PATCH',
            body: data,
          }),
      }),
    makeOrder: builder.mutation({
        query: (data) => ({
          url: `/order/make-order`,
          method: "POST",
          body: data,
        }),
      }),
  }),
});

export const { useUpdateUserMutation, useMakeOrderMutation } = orderApi;