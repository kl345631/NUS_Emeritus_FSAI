import React from "react";

function Card({title, children}) {
    return (
        <div className='card'>
            <h3 className='cardtitle'>{title}</h3>
            {children}        
        </div>
    );
};

export default Card; 