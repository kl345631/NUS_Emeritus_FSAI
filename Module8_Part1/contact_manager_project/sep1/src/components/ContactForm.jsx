import { useState } from "react";

export default function ContactForm({ onAdd }) {
  // Local state to store input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Function runs when user submits form
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    // Basic validation
    if (!name.trim() || !phone.trim()) 
      return alert("Both fields are required!");

    // Create a new contact object
    const newContact = {
      id: Date.now(), // unique id
      name,
      phone
    };

    // Call parent function and send contact object
    onAdd(newContact);

    // Clear inputs after submit
    setName("");
    setPhone("");
  };

  return (
    // onSubmit calls handleSubmit
    <form className="form" onSubmit={handleSubmit}>

      {/* Controlled input for name */}
      <input 
        placeholder="Enter name"
        value={name} // value comes from state
        onChange={(e) => setName(e.target.value)} // updates state
      />

      {/* Controlled input for phone */}
      <input 
        placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Submit button */}
      <button className="add-btn">Add Contact</button>
    </form>
  );
}
