import React, { useEffect,   useState   } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function Admin(){
    const [users, setUsers] = useState(null);
    
    useEffect(() => {
       async function getAllUsers(){
            try{
            let res = await axios.get('http://localhost:3000/users');
            let allUsers =res.data;
            console.log(allUsers);
            setUsers(allUsers);
            }catch(err){
                console.log(err);
            }   
        }
        getAllUsers(); 
    }, [])

    if(!users) return <h1>loading...</h1>

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return (
        <Box sx={{display:'flex', 
                  justifyContent:'center', 
                  flexDirection:'column', 
                  flexWrap:'wrap', 
                  alignContent:'center', 
                  mt:'20px'}}>
            <Typography variant='h3' sx={{mb:'10px'}}>User List</Typography>
            <TableContainer component={Paper} sx={{display:'flex', justifyContent:'center', width:'90%'}} >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>User ID</StyledTableCell>
                    <StyledTableCell align="left">First Name</StyledTableCell>
                    <StyledTableCell align="left">Last Name</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <StyledTableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                    <StyledTableCell align="left">{user.firstName}</StyledTableCell>
                    <StyledTableCell align="left">{user.lastName}</StyledTableCell>
                    <StyledTableCell align="left">{user.email}</StyledTableCell>
                    <StyledTableCell align="left">{user.state}</StyledTableCell>
                
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Box>
      );
}