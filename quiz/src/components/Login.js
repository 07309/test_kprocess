import React, { useState } from 'react'
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import { Box } from "@mui/system";
import Center from './Center';
import useForm from '../hooks/useForm';

const getFreshModel= () =>({
    name:"",
    email:""
})

export default function Login() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e =>{
        e.preventDefault();
        console.log(values);
    }

    return (
        <Center>
        <Card sx={{width: '400px'}}>
            <CardContent sx={{textAlign: 'center'}}>
                <Typography variant="h3" sx={{my:3}}>
                    Quiz Test
                </Typography>
            <Box sx={{ '& .MuiTextField-root' : {
                margin: 1,
                width: '92%' 
            }}}>
            <form noValidate autoComplete='off' onSubmit={login}>
            <TextField 
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            variant="outlined" />

            <TextField 
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            variant="outlined" />

            <Button 
            type="submit"
            variant="contained"
            size="large"
            sx={{width: '90%'}}>Start</Button>

            </form>
            </Box>
            </CardContent>
        </Card>
        </Center>

    );
}
    