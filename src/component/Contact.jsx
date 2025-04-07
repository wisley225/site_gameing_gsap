import React, { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Contact = () => { 
const useAnimeRef=useRef([])
const imageRef=useRef([])

useEffect(()=>{

    const ctx= gsap.context(()=>{

gsap.set(useAnimeRef.current, {
opacity:1
})

let timeline=gsap.timeline()

gsap.from( useAnimeRef.current,{
x:100,
y:200,
duration:0.5,
delay:2,
opacity:0,
stagger:0.1,
scrollTrigger:{
    trigger:useAnimeRef.current,
    end: 'bottom bottom',
    scrub:1,
    
}

})

timeline.from(imageRef.current[1],{
 opacity:1,
 translateY:30, 
duration:0.5 ,
scrollTrigger:{
trigger:imageRef.current[1],
start: '50% 80%',
end: 'center 50%',  
scrub:1,

}


})



gsap.set(imageRef.current[0],{
clipPath:'polygon(16% 0, 100% 16%, 100% 100%, 9% 97%)',
opacity:1,
scale:1,
})

gsap.from(imageRef.current[0],{
rotateY:360,
opacity:0,
duration:1.5,
scale:0.1,
scrollTrigger:{
trigger:imageRef.current,

start:'10% 100%',
end: '50% 50%',
scrub:1,


}




})

gsap.to(imageRef.current[0],{
   translateX:10,
   translateY:10,
  duration:3,
    yoyo:true,
    repeat:-1

})


gsap.set(imageRef.current[1],{
    clipPath:'polygon(9% 0, 66% 0, 61% 54%, 19% 65%)'
})

gsap.set(imageRef.current[2],{
    clipPath:'polygon(21% 9%, 100% 35%, 75% 100%, 0 100%)'
})

 })

    return ()=>ctx.revert()

},[])


    return (
        <div className='    bg-black my-20 mx-5 rounded-xl h-[550px] flex justify-center items-center'>
            
<div  className=' relative z-10 text-center text-white text-6xl font-extrabold  uppercase'>
<p className='  text-center text-sm'>Join Zentry</p>

<p ref={(el)=>(useAnimeRef.current[0])=el}>let's build the  </p>
<p ref={(el)=>(useAnimeRef.current[1])=el}>new era of</p>
<p ref={(el)=>(useAnimeRef.current[2])=el}>gaming together</p>


<button 
         className='border cursor-pointer    text-black font-zentry bg-white  text-sm mt-5  py-4 px-6  rounded-full uppercase  '> contact us </button>
         
</div>


<div ref={(el)=>(imageRef.current[0])=el} className=' h-[500px]  absolute right-10 '>
    <img src={`img/swordman.webp`} alt="" className=' object-cover object-center size-full' />
</div>

<div ref={(el)=>(imageRef.current[1])=el} className='absolute size-80 -translate-y-[115px]   border  left-20  '>
    <img src={`/public/img/contact-1.webp`} alt="" className=' object-center object-cover size-full' />
</div>

<div ref={(el)=>(imageRef.current[2])=el} className='absolute h-36 w-80 translate-y-[203px]   border  left-32 '>
    <img src={`/public/img/contact-2.webp`} alt="" className=' translate-y-6  scale-[1.3]  object-cover size-full' />
</div>

        </div>
    );
}

export default Contact;





































