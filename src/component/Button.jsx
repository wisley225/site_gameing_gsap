
import React from 'react';

const Button = ({ id, title, leftIcon,containerClass, rightIcon}) => {
    return (
        <button id={id} className={`group bg-yellow-300 relative z-10 w-fit cursor-pointer 
            overflow-hidden rounded-full  px-7 py-3
             text-black inline-flex ${containerClass} `} >{leftIcon}
             

<span className='  overflow-hidden font-generale text-xs uppercase '>
    <div>
        {title}
    </div>
</span>
 {rightIcon}
             </button>
    )
}

export default Button;
