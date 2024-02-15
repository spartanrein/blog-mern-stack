import React, { useState } from 'react'
import { Avatar, Box, Button, Card, FormControl, IconButton, TextField, Typography } from '@mui/material';
import reinerAvatar from '../assets/reiner_nobackground.png';
import { cyan } from '@mui/material/colors';
import { usePostAddBlogpostMutation } from '../services/blogPosts';

export const CreatePost = () => {
    const [blogText, setBlogText] = useState('')
    const [addPost, result] = usePostAddBlogpostMutation()

    function handleSubmit(e, blogText){
        e.preventDefault();
        console.log('Form Submitted', blogText)
        addPost(blogText)
        setBlogText('')
    }

    return (
        <form id="createPost" onSubmit={(e) => handleSubmit(e, blogText)}>
            <Card sx={{padding:'8px'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Box paddingY="8px" width='100%'>
                        <TextField
                            onChange={(t) => {
                                setBlogText(t.target.value)
                            }}
                            value={blogText}
                            id="outlined-multiline-flexible"
                            label="What's on your mind, Reiner?"
                            multiline
                            maxRows={4}
                            fullWidth
                        />
                    </Box>
                </Box>
                {blogText && <Button type="submit" id={'createPost'} variant="contained" fullWidth>Post</Button>}
            </Card>
        </form>
    )
}

export default CreatePost