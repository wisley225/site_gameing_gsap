 import React from 'react';
 import { useRef ,useEffect} from 'react';
 import gsap from 'gsap';
 
 const AnimatedTitle = () => {
   const containerRef=useRef(null);
   const animatedRef=useRef([]);

   useEffect(()=> {

const ctx=gsap.context(()=>{



if (containerRef.current) {

   

   
   gsap.from( animatedRef.current,{
      duration:0.5,
   stagger:0.1,
   ease:'power2.inOut',
   x:150,
   y:150,
   delay:0.5,
   scrollTrigger: {
   trigger:containerRef.current,
   start:"40% 80%", 
   end:'40% 80%',
   scrub:1,
   }
})
}


   

},containerRef)
 return ()=>ctx.revert()
   },[] )

   



    return (
       <div ref={containerRef} className= '   font-extrabold    mt-5 text-center text-7xl max-lg:text-3xl max-md:text-xl uppercase leading-[0.8] '>
<p ref={(el)=>(animatedRef.current[0]=el)} >Discover the world's </p>
   <p ref={(el)=>(animatedRef.current[1]=el)}>largest shared adventure</p> 

      </div>
    );
 }
 
 export default AnimatedTitle;
 


//  git remote add origin https://github.com/wisley225/site_gameing_gsap.git
// git branch -M main
// git push -u origin main