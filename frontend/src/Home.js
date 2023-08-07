import React, { useEffect,   useState   } from 'react';
import {Link} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home(){
    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', height:'100vh', backgroundColor:'#eeeeee'}}>
        <Paper sx={{ maxWidth: 800, p:2, m:5}}>
            <Link to='/admin'><Button>Admin Page</Button></Link>
        </Paper>
        <Paper sx={{ maxWidth: 800, p:2, m:5}}>
            <Link to='/signup'><Button> Sign Up</Button></Link>
        </Paper>
        </Box>
    )
    
}
