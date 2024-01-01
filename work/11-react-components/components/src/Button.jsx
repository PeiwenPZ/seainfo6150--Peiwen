import React from 'react';
import { useState } from 'react';

function Button({
    className,
    onClick,
    children,
    visual = "button",
    type="button",
    
 }){

    const [buttonState, setButtonState] = useState(false);

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
        setButtonState(true);
      };

    const buttonStyle = {
        
        ...(visual === 'link' ? { color: 'blue', textDecoration: 'underline', cursor: 'pointer' } : { backgroundColor: 'green', color: 'white', cursor: 'pointer' }),
    };

    let buttonClass = "button";
    if(visual ==="link"){
        buttonClass = "button-link";
    }
    return(
        <div>
        <button 
        className={'${buttonClass} ${className}'}
        disabled={buttonState} 
        onClick={handleClick}
        style = {buttonStyle}
        type={type}>
        {children}</button>

        {buttonState && <p>You clicked the button!</p>}
    </div>
    );
}
export default Button;