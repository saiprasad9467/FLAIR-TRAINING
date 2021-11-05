import { TextField, Typography, Button, Paper, Container, FormControlLabel, Checkbox } from '@mui/material'
import './Signup.js'
import './LoginPage.js'
import './ForgotPassword.js'
import './images/Login.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
//import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import React, { useState } from 'react'
import LoginPage from './LoginPage.js'


function LoginM() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [btn, setBtn] = useState(false);
    const data = {
        username: "ramsurya@gmail.com",
        password: "ramsurya"
    }

    const clickHandler = (e) => {
        e.preventDefault();
        setBtn(!btn)
        if (email == data.username && pass == data.password) {
            alert("you logged in successfully");
        }
        else {
            alert("username and password is incorrect");
        }

    }
    const [fill,setFill]=useState(false)
    const [valid,setValid]=useState(true)
    const validate=(e)=>{
        const exp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        e.preventDefault();
        setBtn(!btn)
        try{
          if(email.length === 0){
          setFill(!fill)
          setValid(true)
          }
        
        else if(email == data.username && pass == data.password)
        {         
              alert("you logged in successfully");
        }
            else 
            {
                setValid(true)
              const test=exp.test(email.toLowerCase().trim());
              if(!test){
                setFill(false)
                setValid(false)
              }
        alert("incorrect username and password")
            }
            
        }
        
        catch(error){}
      }

    return (
        <div style={{ "backgroundcolor": "blue" }} className="mainStyle">
            <center>
                <Paper elevation={4} style={{ "width": "400px", "height": "400px", "marginTop": "100px" }}>
                    <Container style={{ "textAlign": "center", "width": "300px" }}>
                        <PersonOutlineIcon fontSize="large" className="click" />
                      
                        <form onSubmit={validate}>
                            <Typography variant="h6" className="click">LOG IN</Typography>
                            <TextField label="username or email" variant='standard' type="text" fullWidth  color="primary"  onChange={e => setEmail(e.target.value)}></TextField>
                            {fill?<p style={{color:"red" ,height:"1px",textalign:"left"}}>*please enter email</p>:''}
                            {valid?'':<p style={{color:"red" ,height:"1px",textalign:"left"}}>*please enter valid email</p>}<br/>
                            <TextField label="password" variant='standard' type="password" fullWidth required onChange={e => setPass(e.target.value)}></TextField><br /><br />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Remember me" style={{ "textAlign": "left" }} /><br />
                            <Button variant="contained" color='primary' type="submit">{btn ? 'log in' : 'Log in'}</Button><br />
                        </form>
                        <p> <NavLink to="/Signup" className="click">Doesn't have an account?Sign up</NavLink></p>
                        <NavLink to="/ForgotPassword" className="click">forgot password</NavLink><br />
                       
                        {/* <NavLink to="/Signup">Create an account </NavLink> */}
                    </Container>
                </Paper>
            </center>
        </div>
    )
}

export default LoginM
