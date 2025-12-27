import React from "react";

function Button({btn, show_function}) {
  return (
    <>
      <button onClick={show_function}>Card {btn} Button</button>
    </>
  );
};

export default Button;
