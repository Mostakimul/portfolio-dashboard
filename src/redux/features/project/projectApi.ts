import { baseApi } from '../../api/baseApi';

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data) => ({
        url: '/projects',
        method: 'POST',
        contentType: 'multipart/form-data',
        body: data,
      }),
      invalidatesTags: ['projects'],
    }),
    getAllProjects: builder.query({
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
          url: '/projects',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['projects'],
    }),
    getSingleProject: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'GET',
      }),
      providesTags: ['project'],
    }),
    updateProject: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/projects/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['projects', 'project'],
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/projects/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['projects'],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
