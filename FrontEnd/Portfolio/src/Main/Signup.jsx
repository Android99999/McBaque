import React,{ useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from '../Sub/Modal/Modal';

function Signup() {

    const navigate = useNavigate();
    axios.defaults.withCredentials = 'true'

    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isValid, setIsValid] = useState(false);

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        name: '',
        email: '',
        password: '',
    })

    const [emailChecker, setEmailChecker] = useState(false)



    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

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

    const handleSubmit = async (e) => {
        e.preventDefault()

      try {
       
        const response = await axios.post('http://localhost:8080/signup', values);

        const isEmailUsed = response.data.isEmailUsed;

        console.log(response.response);
        console.log(isEmailUsed);

        if(!isEmailUsed){
            setEmailChecker(false)
            firstnameRef.current.value = "";
            lastnameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            setIsValid(true);
            openModal("Successfuly Signup. Redirect to Login Page!")
        
        }

      }catch (error) {

        const isEmailUsed = error.response.data.isEmailUsed;

        if (isEmailUsed) {
            setEmailChecker(true)
            openModal("Email is already used.")
            passwordRef.current.value = "";
            console.error('Server responded with error:', error.response.data);
        }else {
            // Something happened in setting up the request that triggered an error
            console.error('Error setting up the request:', error.message);
        }
       
      } 
    }
    
    const handleLogin = () => {
        closeModal();
        navigate('/login')
    }

    const handleFocus = () => {
        
        setEmailChecker(false);
    }



    useEffect(()=>{

        firstnameRef.current.focus();

    },[emailChecker])



  return (
    <div className='bg-slate-900 h-[100vh] flex flex-col justify-center items-center w-full'>
        <div className='bg-slate-50 flex flex-col gap-2 justify-center items-center w-[32em] px-4 py-[2em] rounded'>
            <h1 className='text-[4em] font-bold w-full text-center'>
                Signup
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full px-[3em] py-[1em]'>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='firstname' className='font-Poppins text-[1.3em] font-bold text-neutral-800 tracking-[0.2em]'>Firstname</label>
                        <input type='text' name='firstname' id='firstname' required autoComplete='on' placeholder='' onChange={handleInput} ref={firstnameRef}
                        className='p-3 border-solid border-2 border-neutral-500 rounded font-Poppins font-semibold tracking-[0.1em]'
                        ></input>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='lastname' className='font-Poppins text-[1.3em] font-bold text-neutral-800 tracking-[0.2em]'>Lastname</label>
                        <input type='text' name='lastname' id='lastname' required autoComplete='on' placeholder='' onChange={handleInput} ref={lastnameRef}
                        className='p-3 border-solid border-2 border-neutral-500 rounded font-Poppins font-semibold tracking-[0.1em]'
                        ></input>
                    </div>

                    <div className='flex flex-col gap-1'>


                        <div className='flex flex-row justify-between items-center'>
                           
                            <label htmlFor='email' className='font-Poppins text-[1.3em] font-bold text-neutral-800 tracking-[0.2em]'>Email</label>
                            <label htmlFor="email" className='text-red-500'>{emailChecker && <>Email is already used.</>}</label>

                        </div>
                        <input type='email' name='email' id='email' required autoComplete='on' placeholder='' onChange={handleInput} onFocus={handleFocus} ref={emailRef}
                        className='p-3 border-solid border-2 border-neutral-500 rounded font-Poppins font-semibold tracking-[0.1em]'
                        ></input>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password' className='font-Poppins text-[1.3em] font-bold text-neutral-800 tracking-[0.2em]'>Password</label>
                        <input type='password' name='password' id='password' required autoComplete='off' placeholder='' onChange={handleInput} ref={passwordRef}
                        className='p-3 border-solid border-2 border-neutral-500 rounded font-Poppins font-semibold tracking-[0.1em]'
                        ></input>
                    </div>

                    <button type='submit' className='bg-slate-700 text-[1.4em] py-2 rounded font-bold text-neutral-200'>Continue</button>
                    <div className='w-full  flex flex-row justify-center gap-3'>
                        <p className=' font-Poppins tracking-wider'>Already have accout?</p>
                        <a onClick={handleLogin} className='underline font-black pointer cursor-pointer font-Poppins tracking-widest '>Sign in</a>
                    </div>
                    

            </form>

            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} handleLogin={handleLogin} isValid={isValid}/>
        </div>
        
    
      
        
        
        
    </div>
  )
}

export default Signup