import React, { useState } from 'react';

const ColorChanger = () => {
  // a) State to store the color name entered by the user
  const [color, setColor] = useState("");

//   const handleChange = (e) => {
//     // Updates state automatically as the user types
//     setColor(e.target.value);
//   };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
      {/* a) Text input for entering a color name */}
      <input
        type="text"
        placeholder="Enter a color (eg: blue)"
        value={color}
        // onChange={handleChange}
        onChange={(e) => setColor(e.target.value)}
        style={{ padding: '10px', width: '200px', fontSize: '16px' }}
      />

      {/* b) & c) Box that automatically updates its color based on input */}
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color, // Updates automatically if the input is a valid CSS color
          border: '1px solid #d4cfcfff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>
            {color || "No Color"}
        </span> 
        
      </div>
    </div>
  );
};

export default ColorChanger;
