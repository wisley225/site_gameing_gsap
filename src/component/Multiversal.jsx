
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useState,useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)

const Multiversal = () => {

 const useAnimeRef=useRef(null)
 const textref=useRef([])
 const splitUseRef=useRef(null)




 const handleMouseMove=(event)=>{


if (useAnimeRef.current) {

 const container=useAnimeRef.current;

const bounds = container.getBoundingClientRect();
const mouseX = (event.clientX - bounds.left)/bounds.width; 
const mouseY = (event.clientY - bounds.top)/bounds.height;


    const tiltX=(mouseX - 0.5)*40;
    const tiltY=(mouseY - 0.5)*-40; 





const ctx=gsap.context(()=>{
gsap.to(container, {

    rotateY:tiltY,
    rotateX:tiltX,
     duration:0.2,
    ease:'power1.inOut',
    
    } )

})

return ()=>ctx.revert();
    
}

  

    }

    const handleMouseLeave =()=> {
        gsap.to(useAnimeRef.current, {
          rotateX: 0,
          rotateY: 20,
          ease: "power2.out",
          onStart: () => videoRef.current[0].play(),
        });
      };



useEffect(()=>{


const ctx=gsap.context(()=>{  

gsap.set( useAnimeRef.current, {
clipPath:'polygon(6% 0, 100% 17%, 100% 85%, 0% 100%)',	
x:-20

})



gsap.from( textref.current,{
    duration:0.5,
 stagger:0.1,
 ease:'power2.inOut',
 x:150,
 y:150,
 delay:1,
 scrollTrigger: {
 trigger:textref.current,
 start:"40% 100%", 
 end:'50% 80%',
 scrub:1,
 }
})





})

return ()=>ctx.revert()


},[])





const handleTextEnter =()=>{

    if (splitUseRef.current) {
 console.log(splitUseRef.current)
        const splitText=new SplitType( splitUseRef.current, {type: "chars"});


        let ctx=gsap.context(()=>{


   gsap.set(splitUseRef.current,{
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    lineHeight:2,
   

   })

gsap.set(splitText.chars,{
y:0,
opacity:1

})

 gsap.from(
            splitText.chars,{
                y:15,
                stagger:0.01,
                 duration:0.2,
                 opacity:0
                
                
                })
        
        })
        
        return ()=>ctx.revert();




    
    }




  




}

const handleTextLeave =()=>{

    if (splitUseRef.current) {
const splitText=new SplitType( splitUseRef.current, {type: "chars"});
 let ctx=gsap.context(()=>{


gsap.set(splitText.chars,{

opacity:1

})

 gsap.from(
            splitText.chars,{
                y:-15,
                stagger:0.01,
                 duration:0.2,
                 opacity:0
                
                
                })
        
        })
        
        return ()=>ctx.revert();
 }

}

    return (
        <div className=' mt-60'>
        <h1 className=' mb-5 uppercase text-white text-sm text-center'> the Multiversal ip world</h1>    
        <p ref={(el)=>(textref.current[0]=el)} className=' uppercase font-extrabold text-7xl text-white text-center'>the story of </p>
        <p ref={(el)=>(textref.current[1]=el)} className='   bg-clip-text mix-blend-difference relative z-10   uppercase font-extrabold text-7xl text-white text-center'>a hidden realm </p>
    
       <div 
       onMouseMove={handleMouseMove}
       onMouseLeave={handleMouseLeave} 
       ref={useAnimeRef}  className='  bg-transparent text-transparent   w-10/12 h-[500px] m-auto relative bottom-10  '>
        <img src={`img/entrance.webp`} alt="" 
         className='object-cover object-center size-full   '
        
        />
       </div>


       <div className=' ml-auto text-white w-5/12 '>
         <p className=' mb-5 '>
             where realms converge , lies Zentry and the 
            boundeless piullar . Discover its
         secrets and shape your fate amidst infinite opportunities.
         </p>

         
         <button ref={ splitUseRef} 
          onMouseEnter={()=>handleTextEnter() } 
          onMouseLeave={()=>handleTextLeave()}


         className='border cursor-pointer  text-black  bg-white  text-[10px]  py-2 px-6  rounded-full uppercase  '> 
         discover prologue
 </button>
         
       </div>
      
        </div>
    );
}

export default Multiversal;
