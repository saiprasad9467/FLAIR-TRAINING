import { TextField,Paper,Button, Typography } from '@mui/material'
import './images/Signup.css'
import React from 'react'

function ForgotPassword() {
    return (
        <div className="mainStyle">
            <center style={{"marginTop":"30px"}}>
            <Paper style={{"alignContent":"center","height":"350px","width":"300px" ,"marginTop":"30px" ,"top":"35px"}}>
                <Typography variant="h9" style={{"color":"purple"}}><i>Update your password</i></Typography><br/><br/>
                <TextField type="email" label="email" required variant="filled"></TextField><br/><br/>
            <TextField type="password" label="newpassword" required variant="filled"></TextField><br/><br/>
            <TextField type="password" label="confirmpassword" required variant="filled"></TextField><br/><br/>
            <Button variant="outlined" color="secondary">Sign in</Button>
            </Paper>
            </center>
        </div>
    )
}

export default ForgotPassword
