import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signupv2() {
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    const handleSignin = () => {
        navigate('/signin')
    }
    
  return (
    <>
        <div className='w-100% h-screen bg-[#DDCFC5] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center px-[3em] gap-4 py-[4em] max-w-[100%] min-w-[30%]'>

                <h1 className='font-Lexend font-bold text-8xl text-[#7C2629] py-10'>Sign Up</h1>

                <form onSubmit={handleSubmit} className='flex  flex-col gap-[1.4em] w-[100%]'>
                    
                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4]'>
                       
                        <input type="text" name='firstname' placeholder='Firstname' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4]'>
                       
                        <input type="text" name='lastname' placeholder='Lastname' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4]'>
                       
                        <input type="email" name='email' placeholder='Email' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required autoComplete='on'/>
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4]'>
                       
                        <input type="password" name='password' placeholder='Password' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required autoComplete='on'/>
                    </div>

                    
                    <button type='submit' className='p-4 w-[100%] bg-[#475569] font-Lexend font-semibold text-[1.4em] rounded-md text-[#DDCFC5]'>Sign up</button>
                    
                </form>

                <div className='w-full flex flex-row justify-end  px-1 '>
                    
                    <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]' onClick={handleSignin}>I have account, Sign in instead</button>
                </div>

               
               

            </div>   
        </div>
    </>
  )
}

export default Signupv2