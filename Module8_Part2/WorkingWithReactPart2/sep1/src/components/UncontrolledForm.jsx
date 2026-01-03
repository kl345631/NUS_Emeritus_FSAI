// DOM controls the form input

import { useRef } from "react";

export default function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          ref={inputRef}               // DOM controls value
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


/*
No useState

Value read directly from DOM using ref

React does NOT track input changes
*/