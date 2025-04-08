
import React from 'react';
import GalerieZigma from './GalerieZigma';
import Multiversal from './Multiversal';
import gsap from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
const Galerie = () => {

  const useVideo=useRef(null)


  useEffect(()=>{

if (useVideo.current) {
  const ctx=gsap.context(()=>{  
    
    gsap.to( useVideo.current, {
      opacity:1,
      onStart:()=>useVideo.current.play()
    })
    
  
    
    
    })
    
    return ()=>ctx.revert()
}


   
    
    
    },[])




  return (
    <div className=' bg-black p-20 text-xl border '>
      <div className='  w-96 max-sm:w-60  font-circular-web pt-20 pb-28'>
        <p className='text-white '>
          Into the Metagame Layer</p>
        <p className='text-gray-400'>
          Immerse yourself in a rich and ever-expanding universe where a
          vibrant array of products converge into an interconnected overlay experience on your world.

        </p>

      </div>


      <div className=' border  grid grid-cols-1 gap-5 m-auto ' >

        <GalerieZigma title='radiant'
          description='A cross-platform metagame app, turning your activities
across Web2 and Web3 games into a rewarding adventure.'
          video='videos/feature-1.mp4'
          containerClass="border-gray-600 h-96 m-auto w-full   rounded-lg border border-gray-400" 
          containerClassVideo='rounded-lg  size-full object-center object-cover'
          />

      

   
<div className=' flex max-[637px]:flex-wrap    gap-5  '>

  <GalerieZigma
   title='zigma'
   description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
  video='videos/feature-2.mp4'
  containerClass=' w-1/2 max-[637px]:w-full '
  containerClassVideo=' border border-gray-600   rounded-lg h-[520px] w-full object-cover object-center'
 />

 <div className='rounded-lg w-1/2  max-[637px]:w-full  flex  flex-col   gap-5   size-full '>
 <GalerieZigma
 title='nexus'
 description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.'
   containerClass=' h-[250px] border  border-gray-600 rounded-lg'
   video='videos/feature-3.mp4'
   containerClassVideo='  size-full  object-cover rounded-lg'
   
 />



<GalerieZigma
 title='azul'
 description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.'
 containerClass='border border-gray-600 rounded-lg h-[250px] '
 video='videos/feature-4.mp4'
 containerClassVideo=' rounded-lg size-full  object-cover'
/>



 </div>

</div>


<div className=' flex h-64 max-[639px]:flex-wrap    gap-5 justify-between'>

<div className=' max-[639px]:w-full border rounded-lg border-gray-600 w-1/2 bg-violet-300 pt-10 pl-10 text-5xl max-[689px]:text-3xl font-extrabold uppercase'> <p>More</p> <p>coming</p> <p>soon.</p></div>
<div className=' max-[639px]:w-full border rounded-lg border-gray-600 w-1/2 '>
 <video  ref={useVideo} className=' size-full rounded-lg object-cover object-center' 
 src={`videos/feature-5.mp4`} autoPlay loop ></video></div>



</div>



      </div>

<Multiversal/>


    </div>
  );
}

export default Galerie;
