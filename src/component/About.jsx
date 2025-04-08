
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect , useRef} from 'react';
import AnimatedTitle from './AnimatedTitle';


gsap.registerPlugin(ScrollTrigger)
console.log(gsap.core.globals().ScrollTrigger);

 const About=()=> {
const aboutRef=useRef(null)
const imgRef=useRef(null)



useEffect(()=>{

    const ctx= gsap.context(()=>{

// pour faire un clip d'animation




 gsap.set(aboutRef.current,{
      width:'50%',
      height:'50%',
      
 })


 gsap.to(aboutRef.current,{

 width:'100%',
 height:"100%",
 duration:1,
 scrollTrigger:{
 trigger:aboutRef.current,
 start:'70% 40%',
 end:'bottom center',
 scrub:1,

}


 })










})


    return ()=>ctx.revert() 
},[])



  
        return (
    <div id='about ' className='  min-h-screen w-screen flex justify-center items-center flex-col '>
        <div  className='  relative mb-8 mt-36 flex flex-col items-center gap-5 '>
            <h2 className=' font-generale  text-sm uppercase md:text-[10px] '> welcom to zentry </h2>

           

            <AnimatedTitle />


        </div>


        <div   className='   h-svh  flex justify-center  ' id='clip'>
            <div ref={aboutRef} className=' absolute z-20   mask-clip-path about-image size-full'>
    <img ref={imgRef} src="img/about.webp" alt="arriere-plan" className='   size-full object-cover object-center rounded-lg ' />
            </div>

        </div>
        <div className='about-subtext'>
     <p>the Game of Game begins-your life , now an epic MMORPG</p>
     <p> Zentry unites every player from countless games nd plateforms</p>
            </div>

    </div>
        );
    
}

export default About;
