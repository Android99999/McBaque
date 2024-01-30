import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Login from './Main/Login'
import Portfolio from './Main/Portfolio'
import Signup from './Main/Signup'
import Landing from './Main/Landing'

import './App.css'
import Signin from './Main/Signin'
import Signupv2 from './Main/Signupv2'


function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);

     
    }, 3000); // Adjust the duration as needed

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);



  

  return (
    <>
    {/* <Signin/> */}
    


      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={loading ? <Landing /> : <Navigate to="/signin" />} />
         
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/signup' element={<Signupv2/>}></Route>

        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
