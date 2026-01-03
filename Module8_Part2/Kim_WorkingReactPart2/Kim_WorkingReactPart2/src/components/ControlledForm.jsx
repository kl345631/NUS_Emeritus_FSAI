//react control the form input, Input value is stored in state, hence need useState, Recommended for most applications

import React, { useState } from "react";

export default function ControlledForm() {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Entered Name: "+name);
    };

    return(
        <div>
            <h3>...Controlled components...</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} // onChange is an event listener
                />
                <button type="submit">Submit</button>
                {/* note: no event used in the button bec type:submit is connected to onSubmit*/}
            </form>
            <p>LivePreview: {name}</p>
        </div>
    )
}