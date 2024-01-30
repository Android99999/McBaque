import React from 'react'

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();

    const handleSubmit = () => {

    }
    const handleSignup = () => {
        navigate('/signup')
    }
    
    const handleGuest = () => {
        navigate('/portfolio')
    }

  return (
    <>
        <div className='w-100% h-screen bg-[#DDCFC5] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center px-[3em] gap-4 py-[4em] max-w-[100%] min-w-[30%]'>

                <h1 className='font-Lexend font-bold text-8xl text-[#7C2629] py-10'>Sign In</h1>

                <form onSubmit={handleSubmit} className='flex  flex-col gap-[1.4em] w-[100%]'>
                    
                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4]'>
                        <div className='flex justify-center items-center border-slate-500 border-r-[0.1em] h-[80%] pl-3 pr-5 '>
                            <MdEmail size={20}  color='#3F3F46'/>
                        </div>
                        <input type="email" placeholder='Email' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required  />
                    </div>

                    <div className='flex flex-row justify-start items-center border-solid border-[0.1em] border-[#3F3F46] p-4 bg-[#E7E5E4] '>
                        <div className='flex justify-center items-center border-slate-500 border-r-[0.1em] h-[80%]  pl-3 pr-5'>
                            <FaLock size={20} color='#3F3F46'/>
                        </div>
                        <input type="password" placeholder='Password' className='px-5 py-2 border-none text-slate-700 bg-[#E7E5E4] focus:border-none focus:outline-none font-Lexend w-[100%] font-bold tracking-widest' required />
                    </div>
                    <button type='submit' className='p-4 w-[100%] bg-[#475569] font-Lexend font-semibold text-[1.4em] rounded-md text-[#DDCFC5]'>Sign in</button>
                    
                </form>

                <div className='w-full flex flex-row justify-between px-1'>
                    <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]'>Forget Password?</button>
                    <button className='tracking-wider font-Lexend text-slate-700 text-[0.9em]' onClick={handleSignup}>I don't have account</button>
                </div>

                <div className='flex items-center w-full'>
                    <div className='h-[0.05em] w-full bg-slate-600'></div>
                    <h5 className='mx-2'>or</h5>
                    <div className='h-[0.05em] w-full bg-slate-600 '></div>
                </div>

                <button type='submit' className='p-4 w-[100%] bg-[#475569] font-Lexend font-semibold text-[1.4em] rounded-md text-[#DDCFC5]' onClick={handleGuest}>I am Guest</button>

            </div>   
        </div>
    </>
  )
}

export default Signin