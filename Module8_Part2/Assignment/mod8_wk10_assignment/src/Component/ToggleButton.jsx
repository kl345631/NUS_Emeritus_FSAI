import React, { useState } from "react";

export default function ToggleButton(){


    const [IsVisible, setIsVisible]= useState(false)
    const handleToggle = () => {
    setIsVisible(!IsVisible);
  };
    
    return (
        <div>
        <button onClick={handleToggle}>
            Toggle Button
        </button>
        {IsVisible && <p>Hello, welcome to React!</p>}
        </div>
    )
}