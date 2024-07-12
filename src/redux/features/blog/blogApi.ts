import { baseApi } from '../../api/baseApi';

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        method: 'POST',
        contentType: 'multipart/form-data',
        body: data,
      }),
      invalidatesTags: ['blogs'],
    }),
    getAllBlog: builder.query({
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
          url: '/blogs',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['blogs'],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'GET',
      }),
      providesTags: ['blog'],
    }),
  }),
});

export const { useAddBlogMutation, useGetAllBlogQuery, useGetSingleBlogQuery } =
  blogApi;
