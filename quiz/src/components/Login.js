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
        if (validate())
            console.log(values);
    }

    const validate = ()=>{
        let temp ={}
        temp.email = (/\S+@\S+\.\S+/).test(values.email)?"":"Email invalide"
        temp.name = values.name!=""?"":"Ce champ est requis"
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
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
            variant="outlined" 
            {...(errors.email && {error:true, helperText:errors.email})}/>

            <TextField 
            label="Nom"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            variant="outlined" 
            {...(errors.name && {error:true, helperText:errors.name})} />

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
    