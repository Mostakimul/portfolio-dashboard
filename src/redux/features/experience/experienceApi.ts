import { baseApi } from '../../api/baseApi';

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: (experienceInfo) => ({
        url: '/experiences',
        method: 'POST',
        body: experienceInfo,
      }),
    }),
  }),
});

export const { useAddExperienceMutation } = experienceApi;
