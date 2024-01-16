import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './Main/Login'
import Portfolio from './Main/Portfolio'
import Signup from './Main/Signup'

import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>

        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
