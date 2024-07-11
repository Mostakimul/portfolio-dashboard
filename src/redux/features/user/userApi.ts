import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (userInfo) => ({
        url: '/users/create-admin',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateAdminMutation } = userApi;
