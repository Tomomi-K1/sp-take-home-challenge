import React, { useState   } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function SignupForm(){
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:''
    });
    const [isLoaded, setIsLoaded] = useState(true);
    const navigate = useNavigate();


    function handleChange(e){
        let {name, value} = e.target;
        setFormData(d=>({...d, [name]: value})
        )
        console.log(formData);
    }

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoaded(false);
        try{
            let res = await axios.post('http://localhost:3000/users/', formData);
            console.log(res.data);
            return navigate('/admin');
        }catch(err){
            console.log(err);

        }
        setIsLoaded(true);
    }

    if(!isLoaded)return <h1>Loading...</h1>

    return(
        <Container sx ={{display:'flex', mt: 10}}>
        <Paper 
            elevation={4}
            sx={{
                p:3,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                alignItems:'center', 
                justifyContent:'center' 
            }}>
        <Box component='form' onSubmit={handleSubmit} sx={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
            <h2>Signup Form</h2>
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <OutlinedInput
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    label="firstName"
                    required
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <OutlinedInput
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    label="lastName"
                    required
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="email"
                    required
                />
            </FormControl>
            <Button type='submit' margin='normal' >Submit</Button>  
        </Box>    
    </Paper>            
  </Container>
    )

};