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
    
    const data = {
        username: "ramsurya@gmail.com",
        password: "ramsurya"
    }

    const clickHandler = (e) => {
        e.preventDefault();
        if (email == data.username && pass == data.password) {
            alert("you logged in successfully");
        }
        else{
            alert("username and password is incorrect");
        }

    }

    return (
        <div style={{ "backgroundcolor": "blue" }} className="mainStyle">
            <center>
                <Paper elevation={4} style={{ "width": "400px", "height": "350px", "marginTop": "100px"}}>
                    <Container style={{ "textAlign": "center", "width": "300px" }}>
                        <PersonOutlineIcon fontSize="large" className="click" />
                <form onSubmit={clickHandler}>
                        <Typography variant="h6" className="click">LOG IN</Typography>
                        <TextField label="username or email" variant='standard' type="email" fullWidth required="please" color="primary" validations={["required", "email"]} onChange={e => setEmail(e.target.value)}></TextField><br/><br/>
                        <TextField label="password" variant='standard' type="password" fullWidth required onChange={e => setPass(e.target.value)}></TextField><br /><br/>
                        <FormControlLabel  control={<Checkbox defaultUnChecked />} label="Remember me" style={{ "textAlign": "left" }} /><br />
                        <Button variant="contained" color='primary' type="submit">Log in</Button><br/>
                </form>
                        <NavLink to="/Signup" className="click">Doesn't have an account?Sign up</NavLink><br />
                        <NavLink to="/ForgotPassword" className="click">forgot password</NavLink><br />
                        {/* <NavLink to="/Signup">Create an account </NavLink> */}
                    </Container>
                </Paper>
            </center>
        </div>
    )
}

export default LoginM
