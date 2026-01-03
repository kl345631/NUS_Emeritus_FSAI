// DOM controls the input form
import React from "react";
import { useRef } from "react";

export default function UncontrolledForm() {
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Entered value: " + inputRef.current.value)
    }

    return(
        <div>
            <h3>...Uncontrolled Form...</h3>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Enter Name"
                    ref={inputRef} //DOM controls the value
                />
                <button type="submit">Submit</button> 
                {/* note: no event used in the button bec type:submit is connected to onSubmit*/}
            </form>
        </div>
    )
}