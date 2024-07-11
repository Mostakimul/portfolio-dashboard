import { baseApi } from '../../api/baseApi';

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: (experienceInfo) => ({
        url: '/experiences',
        method: 'POST',
        body: experienceInfo,
      }),
      invalidatesTags: ['experiences'],
    }),
    getAllExperience: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          Object.entries(args).forEach(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number') {
              params.append(key, value.toString());
            }
          });
        }

        return {
          url: '/experiences',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['experiences'],
    }),
  }),
});

export const { useAddExperienceMutation, useGetAllExperienceQuery } =
  experienceApi;
