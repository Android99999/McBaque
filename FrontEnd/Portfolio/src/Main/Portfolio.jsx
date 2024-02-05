import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { BiCheckDouble } from "react-icons/bi";

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
                entry-level <span className='underline text-[#7C2629]'>Web developer</span> <br></br>
                crafting solutions in lines of Code</p>
          </div>

          <div className='flex flex-row justify-between items-center gap-5 py-[2em]'>
            <div className='w-[10em] h-1 bg-[#7C2629]'></div>
            <div className='flex flex-row gap-5'>
              <FaLinkedin color='#3F3F46' size={50} className='cursor-pointer'/>
              <FaGithubSquare color='#3F3F46' size={50} className='cursor-pointer'/>
            </div>
          </div>
          
        </div>
      </div>

      {/* About */}
      <div id="About" className='bg-[#DDCFC5] h-full w-full flex flex-col justify-start items-center'>
          <div className='flex flex-col justify-between max-w-[80%]'>
            {/* 1st */}
            <div className='flex flex-col justify-start items-center w-full h-fi py-10'>
              <div className='flex flex-col justify-center items-center h-fit max-w-[60%] min-w-[60%] '>
                <p className=' text-center font-Rufina text-[3em] tracking-widest font-bold text-[#3F3F46]'>Enthusiastic Web Developer with a Passion for Crafting Digital Experiences</p>
              </div>
            </div>
            {/* 2nd */}
            <div className='flex flex-row justify-center items-center w-full h-fit gap-4 py-[3em]'>
              <div className='w-[100%] h-[0.12em] bg-[#7C2629]'>
              </div>

              <div className='w-[26%] py-[1.4em]  px-[2.4em]  bg-[#475569] text-center rounded-full font-Poppins font-semibold text-[#DDCFC5] text-[0.8em] tracking-widest'>
                ABOUT ME  
              </div>

              <div className='w-[100%] h-[0.12em] bg-[#7C2629]'>
              </div>

            </div>
          {/* 3rd */}
            <div className=' h-fit w-full flex flex-row justify-between gap-4 py-10'>

              <div className='min-w-[34%] flex flex-col'>
                <div className='flex flex-col h-[50%]'>
                  <div className='h-[50%]'><BiUser size={75}/></div>
                  <div className='py-4 text-[2em] font-Poppins font-semibold tracking-widest text-[#7C2629]'>Who I am</div>
                </div>
                <div className='w-full font-Poppins font-thin text-[1.4em] py-4 tracking-[0.14em]'>
                  <p>Web Developer with expertise in both frontend and backend technologies.</p>
                </div>
              </div>

              <div className='min-w-[30%] flex flex-col'>
                <div className='flex flex-col h-[50%]'>
                  <div className='h-[50%]'><BiEditAlt size={75}/></div>
                  <div className='py-4 text-[2em] font-Poppins font-semibold tracking-widest text-[#7C2629]'>What I Do</div>
                </div>
                <div className='min-w-[100%] font-Poppins font-thin text-[1.4em] tracking-[0.15em] py-4'>
                  <p>Excels in delivering solutions, ranging from responsive designs to complex web applications.</p>
                </div>
              </div>

              <div className='min-w-[30%] flex flex-col'>
                <div className='flex flex-col h-[50%]'>
                  <div><BiCheckDouble size={75}/></div>
                  <div className='py-4 text-[1.8em] font-Poppins font-semibold text-[#7C2629] tracking-widest'>Why Choose Me</div>
                </div>
                <div className='max-w-[100%] font-Poppins font-thin text-[1.4em] tracking-[0.14em] py-4'>
                  <p>Consistently exceeds client expectations through innovative and future-proof solutions</p>
                </div>
              </div>
             
            </div>
            {/* 4th */}
            <div className='flex flex-col w-full justify-center items-center gap-10 p-4'>
              <div className='font-Poppins text-[2em] tracking-[0.14em] text-[#3F3F46] font-semibold'>Tell me about your project</div>
              <div className='py-[1.2em] px-[3.8em] bg-[#475569] font-Poppins tracking-widest font-semibold rounded-full text-[#DDCFC5]'>Email Me</div>
            </div>

          </div>
      </div>
        {/* ABOUT END */}



    </div>
    </>
  )
}

export default Portfolio