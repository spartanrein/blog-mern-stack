import {React, useState } from 'react'

import { Box, Button, Card, Divider, Stack, TextField, Typography } from '@mui/material'
import { usePostLoginUserMutation } from '../services/user'

export const SignUp = (props) => {
    const [loginUser, result] = usePostLoginUserMutation({fixedCacheKey:'authCredentials'})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e, email, password) => {
        e.preventDefault()
        loginUser({email: email, password: password})
    }

    return (
            <Card sx={{padding:'12px', width:'100%'}}>
                <form id='login' onSubmit={(e) => handleSubmit(e, email, password)}>
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
                        <Button 
                            variant='contained'
                            type="submit"
                            id="login"
                        >
                            Login
                        </Button>
                        <Divider sx={{paddingTop:'12px'}}/>
                        <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
                            <Typography>New User?</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center',}}>
                            <Button variant={"contained"} color={'success'}>Create new account</Button>
                        </Box>
                    </Stack>
                </form>
            </Card>
    )
}

export default SignUp