import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;


    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleInput = (e) => {
        setValues((prevVal) => ({...prevVal, [e.target.name]: e.target.value}))
    }

    const handleSubmit = () => {

    }

    
    useEffect(()=>{
        console.log(values)
    },[values])


  return (
    <div>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

            <div>
                <label>Email</label>
                <input type="email" name='email' id='email' autoComplete='on' onChange={handleInput}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name='password' id='password' autoComplete='off' onChange={handleInput}/>
            </div>

            </form>
        </div>
    </div>
  )
}

export default Login