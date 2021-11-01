import { fontSize, sizeHeight } from '@mui/system';
import React ,{useState} from 'react'

function Login() {
    const [data,setData]= useState({
        username:'',
        gmail:'',
        password:'',
        confirmpassword:''
    });
    const {username,gmail,password,confirmpassword}=data
    const clickHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
        e.preventDefault();
        if(password === confirmpassword)
        {
            console.log(data);
        }
        else{
            alert("incorrect passwords");
        }
}
    return (
        <div>
            <center>
              
            <form  onSubmit={submithandler}>
                {/* <label> username:</label> */}
                    <input type="text" placeholder="enter username" name="username" value={username} onChange={clickHandler} required></input><br/>
                    {/* <label> gmail:</label> */}
                    <input type="mail" placeholder="enter gmail" name="gmail" value={gmail} onChange={clickHandler} required></input><br/>
                    {/* <label> password:</label> */}
                    <input type="password" placeholder="enter password" name="password" value={password} onChange={clickHandler} required="enter password"></input><br/>
                    {/* <label> confirmpassword:</label> */}
                    <input type="password" placeholder="confirm password" name="confirmpassword" value={confirmpassword} onChange={clickHandler} required></input><br/>
                    <input type="submit" name="submit" ></input><br/>
                </form>
              
            </center>
        </div>
    )
}

export default Login
