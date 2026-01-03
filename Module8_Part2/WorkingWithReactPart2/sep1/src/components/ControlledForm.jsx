/*Controlled Component

React controls the form input

Input value is stored in state

Uses useState

Recommended for most applications*/

import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + name);
  };

  return (
    <div>
      <h2>Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}                  // React controls value
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>Live Preview: {name}</p>
    </div>
  );
}



/*
value={name} → React controls input

onChange → updates state

UI updates on every keystroke
*/  