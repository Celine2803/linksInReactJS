import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


function Signup() {
    
    const[username,setUserName]=useState("sam")
    const[email,setEmail]=useState("sam@gmail.com")
    const[password,setPassword]=useState("000")

    const register=e=>{
        console.log(`username:${username} email:{email} password:{password}`)
        e.preventDefault()
        resetForm()
    }

    const resetForm=()=>{
      setUserName(" ")
      setEmail(" ")
      setPassword(" ")
    }
    
  return (
    <>
    <h1>{username}</h1>
    <Box
      component="form"
      onSubmit={register}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          id="username"
          label="username"
          Value={username}
          onChange={e=>setUserName(e.target.value)}
        />
        </div>
        <div>
        <TextField
          
          id="email"
          label="email"
          Value={email}
          onChange={e=>setEmail(e.target.value)}
         
          
          
        />
        </div> 

        <div>
        <TextField
          
          id="password"
          label="password"
          Value={password}
          onChange={e=>setPassword(e.target.value)}
          

          
        />
        <h4>{email}</h4>
        </div> 
     <div>
        <Button variant='outlined' type="submit">Signup</Button>
     </div>
    </Box>

    
    </>
  );
}

export default Signup;