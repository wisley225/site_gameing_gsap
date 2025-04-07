import React from 'react';
import { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import { TiLocationArrow } from 'react-icons/ti';


const GalerieZigma = ({ title ,description ,video , containerClass, containerClassVideo   }) => {
const image =''

const containerRef=useRef(null);
const videoRef=useRef([]);
const  [cursorPoition,setCursorPoition]=useState({x:0,y:0});
const [hoveropacity,setHoverOpacity]=useState('');
const hoverButtonRef=useRef(null);

 const handleMouseMove=(event)=>{


if (containerRef.current) {


 const container=containerRef.current;

 // bounce est un  objet qui contient 
 // les differente position de la souris
 //   du genre  bottom, left,right,top au le width et le height

    const bounds = container.getBoundingClientRect(); // Récupère les dimensions de la div

    const mouseX = (event.clientX - bounds.left)/bounds.width; 
    const mouseY = (event.clientY - bounds.top)/bounds.height;
     
    // Calculer la rotation en fonction de la position de la souris

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
        gsap.to(containerRef.current, {
          rotateX: 0,
          rotateY: 0,
          ease: "power2.out",
          onStart: () => videoRef.current[0].play(),
        });
      };


const handlehoverButton=(event)=>{
if (hoverButtonRef.current) {


  const  dimension=hoverButtonRef.current.getBoundingClientRect();

  setCursorPoition({x:event.clientX - dimension.left,
                    y:event.clientY - dimension.top});
}


}

const handlehoverEnter=()=>setHoverOpacity('#656fe288, #00000026')
const handlehoverLeave=()=>setHoverOpacity('transparent')
   




 return (
       
            
   


<div ref={containerRef} 
style={{ perspective: '1000px' }}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave} 
className= {containerClass}  >


  <div className=' text-white absolute   flex flex-col  justify-between   h-full p-5   '>
<div className=' w-3/6 relative z-10 '>
<h1 className='text-5xl font-extrabold uppercase text-gray-400 mb-2'> { title} </h1> 


<p className='text-gray-400 text-sm font-semibold '>{description}</p>
</div>


<button
 ref={hoverButtonRef}
 onMouseMove={handlehoverButton}
 onMouseEnter={handlehoverEnter}
  onMouseLeave={handlehoverLeave}
  

style={
 
 {

   background:  `radial-gradient(100px circle at ${cursorPoition.x}px ${cursorPoition.y}px, ${ hoveropacity} ), black `,
}}
className='border relative z-10 border-gray-500  w-44   text-gray-600 uppercase  flex justify-center items-center text-sm px-4 rounded-full py-2 cursor-pointer  bg-black '> <TiLocationArrow/>  coming soon
</button>
   </div> 

   <video ref={(el)=>(videoRef.current[0]=el)} src={video} className={containerClassVideo} autoPlay  ></video>
</div>



      
    );
}

export default GalerieZigma;