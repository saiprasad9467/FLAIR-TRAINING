import { TextField,Button, Container,Paper, Typography,Radio,FormControlLabel } from '@mui/material'
import './SignupPage'
import React ,{ useState } from 'react'
import {FormControl,FormLabel,RadioGroup} from '@mui/material'
import './images/Signup.css'
import SignupPage from './SignupPage'
import {formik } from "formik"
import * as EmailValidator from 'email-validator'

function Signup() {
 const [firstname,setFirstname]=useState('')
 const[lastname,setLastname]=useState('') 
 const [password,setPassword]=useState('')
 const [confirmpassword,setConfirmpassword]=useState('')
 const [email,setEmail]=useState('')
 const [fill,setFill]=useState(false)
const [valid,setValid]=useState(true)
   
//  function changeHandler(){
// const validate = { values () {
//     let errors = {};
//     if (!email) {
//       errors.email = "Required";
//     } else if (!EmailValidator.validate(setEmail)) {
//       errors.email = "Invalid email address.";
//     }
//     const passwordRegex = /(?=.*[0-9])/;
//     if (!password) {
//       errors.password = "Required";
//     } else if (setPassword.length < 8) {
//       errors.password = "Password must be 8 characters long.";
//     } else if (!passwordRegex.test(setPassword)) {
//       errors.password = "Invalid password. Must contain one number.";
//     }
  
//     return errors;
//   }}
// }
const validate=(e)=>{
  e.preventDefault();
  const exp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  try{
    if(email.length === 0){
    setFill(true)
    setValid(true)
  }
    else 
    {
      const test=exp.test(email.toLowerCase().trim());
      if(!test){
        setFill(false)
        setValid(false)
      }

    }
  }
  catch(error){
    return false
  }
}

  

 return (
   <div className="mainStyle">
       
     
         
            <center> 
            <Paper elevation={3} style={{"width":"400px","height":"650px","marginTop":"2px ",position:"auto",scrollMarginBottom:"true"}} >
            <Container elevation ={3} style={{"width":"300px"}}>
            
           
            <Typography variant="h4" className="click">Sign up</Typography><br/>
          
            <form onSubmit={validate}>
      
                <TextField variant="standard" label=" firstname" type="text"  fullWidth required onChange={e=>setFirstname(e.target.value)}  ></TextField><br/><br/>
                <TextField variant="standard" label=" lastname" type="text" fullWidth required onChange={e=>setLastname(e.target.value)}></TextField><br/><br/>
                <TextField variant="standard" label=" password" type="password" fullWidth required onChange={e=>setPassword(e.target.value)}></TextField><br/><br/>
                <TextField variant="standard" label=" confirm password" type="password" fullWidth required onChange={e=>setConfirmpassword(e.target.value)}></TextField><br/><br/>
              <TextField variant="standard" label="email" type="text" fullWidth  onChange={e=>setEmail(e.target.value)}></TextField>
              {fill?<p style={{color:"red" ,height:"1px",textalign:"left"}}>*please enter email</p>:''}
              {valid?'':<p style={{color:"red" ,height:"1px",textalign:"left"}}>*please enter valid email</p>}<br/><br/>
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
  </RadioGroup>
</FormControl><br/>
              
              <Button color="primary" variant="contained" type="submit" style={{"align":"left"}} >signup</Button>
            </form>
            </Container>
            </Paper>
        
            </center>
           
        </div>
    )
}

export default Signup
