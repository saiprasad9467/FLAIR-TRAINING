import { TextField,Button, Container,Paper, Typography,Radio,FormControlLabel } from '@mui/material'
import './SignupPage'
import React ,{ useState } from 'react'
import {FormControl,FormLabel,RadioGroup} from '@mui/material'
import './images/Signup.css'
//import { BrowserRouter,Route,Switch} from 'react-router-dom';
import SignupPage from './SignupPage'

function Signup() {
 const [firstname,setFirstname]=useState('')
 const[lastname,setLastname]=useState('') 
 const [password,setPassword]=useState('')
 const [confirmpassword,setConfirmpassword]=useState('')
 const [email,setEmail]=useState('')
  
 
    return (
        <div className="mainStyle">
         
            <center> 
            <Paper elevation={3} style={{"width":"400px","height":"600px","marginTop":"12px " }}>
            <Container elevation ={3} style={{"width":"300px"}}>
            
           
            <Typography variant="h4" className="click">Sign up</Typography><br/>
          
            <form>
      
                <TextField variant="standard" label=" firstname" type="text"  fullWidth required onChange={e=>setFirstname(e.target.value)}></TextField><br/><br/>
                <TextField variant="standard" label=" lastname" type="text" fullWidth required onChange={e=>setLastname(e.target.value)}></TextField><br/><br/>
                <TextField variant="standard" label=" password" type="password" fullWidth required onChange={e=>setPassword(e.target.value)}></TextField><br/><br/>
                <TextField variant="standard" label=" confirm password" type="password" fullWidth required onChange={e=>setConfirmpassword(e.target.value)}></TextField><br/><br/>
              <TextField variant="standard" label="email" type="email" fullWidth required onChange={e=>setEmail(e.target.value)}></TextField><br/><br/>
                 <FormControl component="fieldset">
  <FormLabel component="legend" required>Gender</FormLabel>
  <RadioGroup
    aria-label="gender"
    defaultValue="Male"
    name="radio-buttons-group"
    style={{"width":"500px"}}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl><br/>
              
              <Button color="primary" variant="contained" type="submit" style={{"align":"left"}}>signup</Button>
            </form>
            </Container>
            </Paper>
        
            </center>
           
        </div>
    )
}

export default Signup
