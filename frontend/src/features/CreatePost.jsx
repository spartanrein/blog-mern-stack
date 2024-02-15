import React, { useState } from 'react'
import { Avatar, Box, Button, Card, FormControl, IconButton, TextField, Typography } from '@mui/material';
import reinerAvatar from '../assets/reiner_nobackground.png';
import { cyan } from '@mui/material/colors';

export const CreatePost = () => {
    const [blogText, setBlogText] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted', blogText)
        setBlogText('')
    }

    return (
        <form id="createPost" onSubmit={(e) => handleSubmit(e)}>
            <Card sx={{padding:'8px'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Avatar
                        alt="Reiner De Guzman"
                        src={reinerAvatar}
                        sx={{ width: 56, height: 56, backgroundColor:cyan[50], textAlign:"center"}}
                    />
                    <Box sx={{paddingLeft:'12px', width:'100%'}}>
                        <Box paddingBottom="8px">
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
                </Box>
                {blogText && <Button type="submit" id={'createPost'} variant="contained" fullWidth>Post</Button>}
            </Card>
        </form>
    )
}

export default CreatePost