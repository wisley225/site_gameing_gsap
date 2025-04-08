
import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { FaMusic } from 'react-icons/fa';
import { useRef ,useState} from 'react';

import './navbar.css';
import ButtonAnim from './ButtonAnim';




const Navbar = () => {

const audio ='audio/loop.mp3'
const audioRef=useRef(null)
const [play, setPlay]=useState(false)

          

if (audioRef.current) {

    if (play) {
        audioRef.current.play()
    }
    else{
        audioRef.current.pause()
    }
    
}



    return (
        <div  className='max-[563px]:left-1  max-[1015px]:w-7/12 max-[995px]:w-[550px] max-[689px]:w-[400px] max-[689px]:left-36  backdrop-brightness-50 rounded-xl fixed left-24 mt-10 z-50 w-10/12   py-5 max-[717px]:flex-col   max-[717px]:items-center  flex justify-between   text-blue-50' >
           <div className='   flex justify-center max-[689px]:w-full  items-center w-1/2'>
            <div className=' size-10   mx-9  '> 
                <img src={`img/logo.png`} alt="" className=' object-center object-cover size-full' /></div>
            <ButtonAnim text='products' containerClass=' bg-white  flex justify-center items-center px-4 py-1 max-[1015px]:w-40 rounded-full  text-black  ' icon={<TiLocationArrow  />} />
           </div>

     <ul  className='  flex  justify-evenly  items-center text-sm '>
           
            <li 
                 className='menu   cursor-pointer '>nexus  </li>
            <li 
                className='menu  cursor-pointer '> vault  </li>
            <li 
                className='menu  cursor-pointer     '> Prologue  </li>
            <li 
                className='menu  cursor-pointer     '>about  </li>
            <li 
                className='menu  cursor-pointer     '> contact  </li>
            <li 
                className='menu  cursor-pointer     '> <FaMusic onClick={()=>setPlay(!play)} /> <audio ref={audioRef} src={audio} loop></audio>  </li>


          </ul>
        </div>
    );
}

export default Navbar;
