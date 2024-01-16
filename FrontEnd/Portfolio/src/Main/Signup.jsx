import React,{ useState } from 'react'
import axios from 'axios'
function Signup() {

    axios.defaults.withCredentials = 'true'

    

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        name: '',
        email: '',
        password: '',
    })

    const handleFullname = () => {
        const {firstname, lastname} = values;
        const fullname = `${firstname} ${lastname}`
        setValues((prevVal) => ({...prevVal, name: fullname}))
        console.log(values)
    }

    const handleInput = (e) => {
        setValues((prevVal) => ({...prevVal, [e.target.name]: e.target.value}))
        handleFullname();
        
    }

    const handleSubmit = (e) => {
     
        e.preventDefault()

      
      console.log(values)
    }

  return (
    <div>
        <div>
            <h1>
                Sign up
            </h1>
            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor='firstname'>Firstname</label>
                        <input type='text' name='firstname' id='firstname' required autoComplete='on' placeholder='' onChange={handleInput}
                        className=''
                        ></input>
                    </div>

                    <div>
                        <label htmlFor='lastname'>Lastname</label>
                        <input type='text' name='lastname' id='lastname' required autoComplete='on' placeholder='' onChange={handleInput}
                        className=''
                        ></input>
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' required autoComplete='on' placeholder='' onChange={handleInput}
                        className=''
                        ></input>
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' required autoComplete='off' placeholder='' onChange={handleInput}
                        className=''
                        ></input>
                    </div>
                    <button type='submit'>Sign up</button>
                </form>

                

            </div>
        </div>
        
    
      
        
        
        
    </div>
  )
}

export default Signup