import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, content, handleLogin, isValid }) => {

    const handleClick = () =>{
        handleLogin();
    }

    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">


        {isValid ? (
           <div className='w-[36em] h-[16em] flex flex-col items-center justify-center rounded bg-slate-200 gap-4 p-4'>
                
               <p className="text-black font-black text-[1.8em] ">{content}</p>
               <button type='button' className=' border-slate-700 border-solid border-2 text-[1.4em] p-2 rounded font-bold text-neutral-800' onClick={handleLogin}>Proceed</button>
       
        </div>
        ) 
        : 
        (
            <div className='w-[36em] h-[16em] flex flex-col items-center justify-center rounded bg-slate-200 gap-1 p-4'>

                <button className=" text-black  font-black text-[1.8em] w-full h-0.3/4 text-right px-4" onClick={onclose}>
                    &times;
                </button>

                <div className='w-full h-3/4 flex items-center justify-center rounded'>
                    <p className="text-black font-black text-[1.8em] ">{content}</p>
                </div>
            
            
            </div>
        )}





        
      </div>,
      document.getElementById('modal-root')
    );
  };

export default Modal;