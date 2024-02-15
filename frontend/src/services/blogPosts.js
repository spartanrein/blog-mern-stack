import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
    reducerPath: 'blogPostApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/blogs'}),
    endpoints: (builder) => ({
        getBlogPosts: builder.query({
            query: () => '/'
        })
    })
})

export const { useGetBlogPostsQuery } = blogPostApi