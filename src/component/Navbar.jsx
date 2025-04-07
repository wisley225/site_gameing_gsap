
import React from 'react';
import { TfiLocationArrow } from 'react-icons/tfi';
import { TiLocationArrow } from 'react-icons/ti';
import Lottie from 'lottie-react';
import { FaMusic } from 'react-icons/fa';
import { useRef ,useEffect,useState} from 'react';
import gsap from 'gsap';
import './navbar.css';




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
        <div  className='  backdrop-brightness-50 rounded-xl fixed left-24 mt-10 z-50 w-10/12   h-20  flex justify-between   text-blue-50' >
           <div className=' flex  items-center w-1/2'>
            <div className=' size-10  mx-9'> <img src={`img/logo.png`} alt="" className=' object-center object-cover size-full' /></div>
            
            <button className=' flex bg-white justify-center items-center rounded-full text-black py-2 px-8'> products <TiLocationArrow className='ml-2' /> </button>
           </div>

     <ul  className=' flex w-4/12 justify-evenly  items-center text-sm '>
           
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
