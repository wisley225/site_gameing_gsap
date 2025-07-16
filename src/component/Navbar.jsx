
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
    
        <div  className='   px-10 w-full  max-[1050px]:px-5  max-[1050px]:justify-evenly      backdrop-brightness-50 rounded-xl fixed   mt-10 z-50  py-5 max-[717px]:flex-col   max-[717px]:items-center  flex justify-between   text-blue-50' >
           <div className='  max-[717px]:mb-5   flex  max-[689px]:w-full  items-center  w-44 justify-between'>
            <div className=' size-10    '> 
                <img src={`img/logo.png`} alt="" className=' object-center object-cover size-full ' />
                </div>
            <ButtonAnim text='products' containerClass=' bg-white  flex justify-center items-center px-4 py-1 max-[1015px]:w-40 rounded-full  text-black  ' icon={<TiLocationArrow  />} />
           </div>

            <ul  className='  flex  justify-between  items-center text-sm    '>
           
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
