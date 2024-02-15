import React from 'react'
import { Avatar, Box, Card, Typography } from '@mui/material';

export const BlogPost = (props) => {
    return (
        <Card sx={{padding:'8px'}}>
          <Box sx={{display:'flex',justifyContent:"space-between", flexDirection:'row'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
              <Avatar></Avatar>
              <Box sx={{display:'flex', flexDirection:'column', paddingLeft:'4px'}}>
                <Typography variant='caption'>Reiner De Guzman</Typography>
                <Typography variant='caption'>Date</Typography>
              </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>Delete</Box>  
          </Box>
          <Box sx={{display:'flex', paddingTop:'4px'}}>
            <Typography>lorem ipsum conda lorem party is not kdjf</Typography>
          </Box>
        </Card>
    )
}

export default BlogPost