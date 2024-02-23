import {React, useState } from 'react'

import { Box, Button, Card, Container, Divider, Paper, Stack, TextField, Typography } from '@mui/material'

export const SignUp = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
            <Card sx={{padding:'12px', width:'100%'}}>
                <Stack spacing={1}>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <Typography variant={'h6'}>
                            Login
                        </Typography>
                    </Box>
                    <TextField
                        label={"Email"}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <TextField
                        label={"Password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <Button variant='contained'>Login</Button>
                    <Divider sx={{paddingTop:'12px'}}/>
                    <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <Typography>New User?</Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center',}}>
                        <Button variant={"contained"} color={'success'}>Create new account</Button>
                    </Box>
                </Stack>
            </Card>
    )
}

export default SignUp