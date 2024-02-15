import React, { useEffect } from "react";
import{useNavigate}from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth)
        {
            navigate("/")
        }
    },[])
    const handleLogin = async () => {
        console.log("email,password", email, password)
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({ email, password }),
        headers: {
            'content-type': 'application/json'
        }
    });
    result = await result.json();
    console.log(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/")

    }else{
        alert("plz enter currect details")
    }
}

return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" className="inputBox" placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input type="password" className="inputBox" placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <button onClick={handleLogin} className="appbutton" type="button">Login</button>

    </div>
 )
}
export default Login