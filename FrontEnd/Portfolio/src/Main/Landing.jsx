import React from 'react'
import Ghost from '../assets/Ghost1.gif'
function Landing() {

  return (
    <div className='bg-slate-900 w-screen h-screen flex flex-col justify-center items-center gap-4'>
      <img src={Ghost} alt='Ghost' className='h-[10em] w-[10em]'></img>
       <h1 className='text-gray-300 font-Poppins text-[2em] tracking-widest'>Loading . . .</h1>
    </div>
  )
}

export default Landing