import React from 'react'
import { useGetBlogPostsQuery } from '../services/blogPosts';
import BlogPost from './BlogPost';
import { Stack } from '@mui/material';

export const BlogPosts = (props) => {
    const {data, error, isLoading } = useGetBlogPostsQuery()
    const Blogs = data?.map(blog => {
        const date = new Date(blog.createdAt).toLocaleString()
        return (
                <BlogPost id={blog._id.toString()} name="Reiner de Guzman" date={date} body={blog.snippet}/>
        )
    })
    return (
        <Stack spacing={'12px'}>
            {Blogs}
        </Stack>

    )
}

export default BlogPosts