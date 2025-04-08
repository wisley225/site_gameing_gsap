import React from 'react';
import gsap from 'gsap';
import { useRef , useEffect, useState} from 'react';

const Chargement = () => {

const loadingRef=useRef([])

useEffect(()=>{

const ctx=gsap.context(()=>{

gsap.to('#rotate',{ rotate:360, repeat:-1, ease:'linear', duration:2 })


})




gsap.to(loadingRef.current, {


scale:1.5,
stagger:0.2,
repeat:-1

})


gsap.from(loadingRef.current, {

scale:1
  
  })

return ()=>ctx.revert()

},[])



    return (
        <div  className=' border h-screen border-red-600 flex justify-center items-center   '>

      <div id='rotate' className=' size-28 place-content-center place-items-center  grid grid-cols-2'>
      <div  ref={(el)=>(loadingRef.current[0])=el} className=' border size-10    rounded-full bg-violet-300'  />
      <div ref={(el)=>(loadingRef.current[1])=el} className=' border size-10   rounded-full bg-violet-300'  />
      <div ref={(el)=>(loadingRef.current[2])=el} className=' border size-10      rounded-full bg-violet-300'  />
      <div ref={(el)=>(loadingRef.current[3])=el} className=' border size-10     rounded-full bg-violet-300'  />

          </div>
            
     
        </div>
    );
}

export default Chargement;








