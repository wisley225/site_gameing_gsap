
import React from 'react';
import ButtonAnim from './ButtonAnim';

const Button = ({ id, title, leftIcon,containerClass, rightIcon}) => {
    return (
 

<ButtonAnim id={id} text={title} containerClass={`text-sm font-generale  group bg-yellow-300 relative z-10 w-fit cursor-pointer 
            overflow-hidden rounded-full  px-7 py-3
             text-black inline-flex ${containerClass}`} icon={leftIcon}  />

    )
}

export default Button;
