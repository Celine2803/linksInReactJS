
import './App.css';


// import { Send } from '@mui/icons-material';

import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppPagination from './AppPagination';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';



function App() {
//state -hooks
  // const [name,setName]=useState("John Doe");
  // const [email,setEmail]=useState("John@gmail.com");
  const [todos,setTodos]=useState([]);

//useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodos(json))
  }, [])

  

  return (
    
    <Container>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
          </TableHead>
        <TableBody>
          {todos.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.title}</TableCell>
              <TableCell align="right"><Button variant='outlined'><EditIcon sx={{color:"blue"}}/></Button></TableCell>
              <TableCell align="right"><Button variant='outlined'><DeleteIcon sx={{color:"red"}}/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </Container>

  );
  
}



            
          

export default App;
