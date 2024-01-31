import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Portfolio() {
  return (
    <>
    <div className='bg-[#DDCFC5] h-screen w-full'>
      {/* first context */}
      <div id="introduction" className='h-full w-full flex flex-col justify-start items-center py-[4em]'>
          {/* navigation */}
        <div className='h-[88%] w-full flex flex-col justify-between max-w-[80%]'>
          <div className='h-fit w-full flex flex-row justify-between items-center py-6 px-2'>

            <div className=''>
                <h1 className='font-Poppins font-black text-[2em] cursor-pointer text-[#3F3F46]'>BAQUE</h1>
            </div>

            <div className='max-w-[40%] min-w-[60%]'>
              <ul className='flex flex-row justify-evenly items-center gap-4 font-Poppins font-semibold text-[1.3em] tracking-widest text-[#3F3F46]'>
                <li className='cursor-pointer'>ABOUT</li>
                <li className='cursor-pointer'>EXPERIENCE</li>
                <li className='cursor-pointer'>SKILLS</li>
                <li className='cursor-pointer'>CONTACT</li>
              </ul>
            </div>

            <div className='bg-[#475569] max-w-[20%] min-w-[16%] flex items-center justify-center rounded-full'>
              <button className='font-Poppins text-[1.3em] font-semibold px-4 py-[0.4em] text-[#DDCFC5]'>Download CV</button>
            </div>

          </div>

          <div className=''>
              <p className='font-Rufina text-[4em] font-semibold tracking-wider text-[#3F3F46]'>
                Baque (/Ba-Ki/) is  a <br></br>
                entry-level Web developer <br></br>
                crafting solutions in lines of Code</p>
          </div>

          <div className='flex flex-row gap-5 py-[2em]'>
            <FaLinkedin color='#3F3F46' size={50} className='cursor-pointer'/>
            <FaGithubSquare color='#3F3F46' size={50} className='cursor-pointer'/>
          </div>
          
        </div>
      </div>

      {/* About */}
      <div id="About">

      </div>

    </div>
    </>
  )
}

export default Portfolio