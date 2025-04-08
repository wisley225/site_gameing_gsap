
import React from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useRef } from 'react';


const ButtonAnim = ({text , icon , containerClass ,id ,  }) => {
 
    const splitUseRef=useRef(null)
    const handleTextEnter =()=>{

        if (splitUseRef.current) {

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
             
        <button id={id} ref={ splitUseRef} 
        onMouseEnter={()=>handleTextEnter() } 
        onMouseLeave={()=>handleTextLeave()}
       className={containerClass}> 
       {icon}{text} 

</button>
    );
}

export default ButtonAnim;
