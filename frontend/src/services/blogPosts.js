import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
    reducerPath: 'blogPostApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/blogs'}),
    tagTypes:['Posts'],
    endpoints: (builder) => ({
        getBlogPosts: builder.query({
            query: () => '/',
            providesTags:['Posts']
        }),
        postAddBlogpost: builder.mutation({
            query: (snippet) => ({
                url: '/',
                method: 'POST',
                body: {snippet:snippet}
            }),
            invalidatesTags: ['Posts']
        })
    })
})

export const { useGetBlogPostsQuery, usePostAddBlogpostMutation } = blogPostApi