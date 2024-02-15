import React from 'react'
import { Avatar, Box, Card, IconButton, Typography } from '@mui/material';
import reinerAvatar from '../assets/reiner_nobackground.png';
import { cyan } from '@mui/material/colors';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDeleteBlogpostMutation } from '../services/blogPosts';

export const BlogPost = (props) => {
    const {id, name, date, body} = props
    const [deleteBlogpost, result] = useDeleteBlogpostMutation()
    function handleDelete(id){
      deleteBlogpost(id)
    }

    return (
        <Card id={id} sx={{padding:'8px'}}>
          <Box sx={{display:'flex',justifyContent:"space-between", flexDirection:'row'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Avatar
                alt="Reiner De Guzman"
                src={reinerAvatar}
                sx={{ width: 56, height: 56, backgroundColor:cyan[50], textAlign:"center"}}
            />
              <Box sx={{display:'flex', flexDirection:'column', paddingLeft:'4px'}}>
                <Typography variant='caption'>{name}</Typography>
                <Typography variant='caption'>{date}</Typography>
              </Box>
            </Box>
            <Box>
                <IconButton sx={{size:'small'}} onClick={(e) => handleDelete(id)}>
                  <DeleteRoundedIcon fontSize="inherit"/>
                </IconButton>  
            </Box>
          </Box>
          <Box sx={{display:'flex', paddingTop:'4px'}}>
            <Typography>{body}</Typography>
          </Box>
        </Card>
    )
}

export default BlogPost