import { baseApi } from '../../api/baseApi';

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSkill: builder.mutation({
      query: (data) => ({
        url: '/skills',
        method: 'POST',
        contentType: 'multipart/form-data',
        body: data,
      }),
      invalidatesTags: ['skills'],
    }),
    getAllSkill: builder.query({
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
          url: '/skills',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['skills'],
    }),
    getSingleSkill: builder.query({
      query: (id) => ({
        url: `/skills/${id}`,
        method: 'GET',
      }),
      providesTags: ['skill'],
    }),
    updateSkill: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/skills/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['skills', 'skill'],
    }),
    deleteSkill: builder.mutation({
      query: (id) => {
        return {
          url: `/skills/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['skills'],
    }),
  }),
});

export const {
  useAddSkillMutation,
  useGetAllSkillQuery,
  useGetSingleSkillQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
