 import React, {useEffect, useRef,useState,} from 'react';
 import gsap from 'gsap';
 import ScrollTrigger from 'gsap/ScrollTrigger';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

 

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {


 const [currenteIndex, setCurrenteIndex]=useState(1)
 const [ hasClicked, setHasClicked]=useState(false)
 const nextVideoRef=useRef(null)
 const videoFrameRef=useRef(null)
 const [loading,setLoading]=useState(true)



 const videoTotal=4
 const videoSuivanteindex=(currenteIndex % videoTotal) +1
 const videoArrieplan=(index)=>`videos/hero-${index}.mp4`;
 const handelClick=()=>{
 setHasClicked(true)
 setCurrenteIndex(videoSuivanteindex)
}

useEffect(()=>{






    
    let ctx=gsap.context(()=>{

        if (hasClicked) {
          
           gsap.set( '#next-video', { visibility:'visible', width:"50%", height:"50%"})
           gsap.to('#next-video',{
            transformOrigin:'center center',
               scale:1,
               width:'100%',
               height:'100%',
               duration:0.5,
               ease:'power1.inOut',
               onStart:()=>nextVideoRef.current.play()
           })
           gsap.from('#current-video', {
               transformOrigin: 'center center',
               scale: 1.5,
               duration: 1.5,
               ease: 'power1.inOut',
           });
       
        }
       
        } , videoFrameRef);
       
         return ()=>ctx.revert();


     






},[currenteIndex])

 useEffect(() => {






    if ( videoFrameRef.current) {


        const ctx2 = gsap.context(() => {

            gsap.set(videoFrameRef.current, {
                clipPath: 'polygon(25% 0, 60% 0, 92% 95%, 0 100%)',
                borderRadius: '0 0 40% 40%'
            });
   
            gsap.from(videoFrameRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderRadius: '0 0 0 0',
                ease: 'power1.inOut',
                duration: 1.5,
                scrollTrigger:{
                    trigger: videoFrameRef.current,
                    start: '90% 50%',
                    end: '80% center',
                    scrub:1,
                 
                }
            });
   
      });
   
        return () => ctx2.revert();
        
    }



}, []);


    return (
     <>
     <div  id='video-frame' className='overflow-hidden rounded-lg  h-dvh  '>

<div ref={videoFrameRef }  className='size-full   flex justify-center items-center'>


 <video className='absolute z-10 size-full  object-cover object-center' 

        src={videoArrieplan(currenteIndex)} 
        ref={nextVideoRef}
         loop
         muted
         /> 


 <video  src={videoArrieplan(currenteIndex)}
         autoPlay
         loop
          muted
           id='next-video'
          className='absolute z-20   size-full   object-cover object-center'
           /> 

               

        
    
<div className=' size-full absolute z-50  flex items-center justify-center '>
<div onClick={handelClick} className=' absolute z-50  size-52  origin-center opacity-0 hover:opacity-100 hover:scale-100 transition-all   cursor-pointer overflow-hidden rounded-lg '>
    <video ref={nextVideoRef}
       loop
       muted 
       id='current-video'
      src={videoArrieplan(videoSuivanteindex)} 
      className='origin-center   absolute   scale-150 size-64 object-cover object-center'
     />  

    </div>

</div>
    


</div>

<h1 className='special-font hero-heading  bottom-5 right-5 text-blue-75 text-8xl font-robert-regular absolute z-40'>G<b>A</b>MING</h1>


<div className='absolute  left-0 top-0 z-30 inline-block '>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='text-blue-100 text-9xl font-extrabold'>redifi<b>n</b>e</h1>
                        <p className='text-blue-100 max-w-64'>Enter the Metagame Layer <br /> Unleash the Play Economy</p>
                        <Button id='watch-triller' title='watch Title' leftIcon={<TiLocationArrow />} containerClass='bg-yellow-300 flex-center gap-1' />
                    </div>

                </div> 




     </div>


     </>
    );
 }
 
 export default Hero;
 