import { use, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './components/controlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import {Routes, Route, Link} from 'react-router-dom'
import { Message1 } from '../../../WorkingWithReactPart2/sep1/src/components/Message'


// //EVENTS
// export default function App() {
//   // handClick function ()/empty parenthesis
//   const handleClick = () => {
//     alert("Button Clicked");
//   };
// return (
//   <div>
//   <h2>Event: OnClick</h2>
//   <button onClick={handleClick}>Click Me</button>
//   </div>
// );
// }

// //onCHange EVENT
// export default function App() {
//   const [message, setMessage] = useState(''); //message value is empty string

//   return(
//     <div>
//       <h2>onChange Event:</h2>
//       <input 
//         type='text'
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)} // e is object(can be any letter), stores value in browser. call setMessage function, change the target value variable
//       />
//       <p>"You typed: {message}"</p>
//     </div>
//   )
// }

// //onKeyDown EVENT (whenever u pressed on somthing)
// export default function App() {
//   const handleClick = (e) => {
//     console.log('Keys pressed:', e.key) //inside key is whatever u type in e
//   }
//   return (
//     <div>
//     <h2>OnKeyDown EVENT:</h2>
//     <input 
//       type='text'
//       placeholder='Press any key'
//       onKeyDown={handleClick} //onKeyDown is a pre-defined function
//     />
//     </div>
//   )
// }

// //useState Example:
// export default function App() {
//   const[count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>useState example:</h2>
//       <p>count: {count}</p>
//       <button onClick={()=>setCount(count+1)}> Click to increment </button>
//     </div> 
//   )
// }

// //useEffect function example: = Runs code after render/return, no need use EVENT or function
// export default function App() {
//   const [message, setMessage] = useState("")
//   const [count, setCount] = useState(0)

//   //  useEffect( () => {setMessage("useEffect_executed:" );},[]
//   // ); // runs once, an empty array is a memory; "I have no memories to track, so I'll just run once and be done."

//   useEffect( () => {setMessage("useEffect_executed:" + count);},[count]
//   );

//   return (
//     <div>
//     <h2>useEffect: runs code automatically after render</h2>
//     <p> {message} </p>
//     <button onClick={()=>setCount(count+1)}>Click to Increment </button>
//     </div>
//   )
// }

// // useRef: focus input, store value without re-render //focus is an inbuilt function
// export default function App() {
//   const inputRef = useRef(null);
//   console.log(inputRef);
//   const logValue = () => {console.log(inputRef.current.value)}

//   return (
//     <div>
//       <h2>useRef Example:</h2>
//       <input 
//         ref={inputRef} //value stored in inputbox will be stored in ref (null)
//         type = 'text'
//         placeholder='type something and its log in console'
//       />
//       <button onClick={() => inputRef.current.focus()}> Highlight input box </button> 
//       <p><button onClick={logValue}>Log to Console</button></p>
//     </div>
//   )
// }

// // REACT FORMS: controlled and uncontrolled forms
// export default function App() {
//   return(
//     <div>
//       <h2>Controlled Form</h2>
//       <ControlledForm/>
//       <h2>Un-Controlled Form</h2>
//       <UncontrolledForm/>
//     </div>
//   )
// }

// ROuting
// export default function App() {
//   return(
//     <div>
//       <nav style={{padding:20}}>
//         <Link to='/'>Home</Link> | {" "}
//         <Link to='/controlledform'>Controlled-Form</Link> | {" "}
//         <Link to='/uncontrolledform'>Uncontrolled-Form</Link> | {" "}
//       </nav>
//       {/* Routes ; call element whenever path is= */}
//       <Routes>
//         <Route path='/controlledform' element={<ControlledForm/>}/>
//         <Route path='/uncontrolledform' element={<UncontrolledForm/>}/>
//         <Route path='/' element={<Message1/>}/>
//       </Routes>
//     </div>
//   )
// }

// Events in nested function, when button is clicked
function SayHelloComponent() {
  function SayHello() {
    alert('Hello');
  }
  return (
    <button onClick={SayHello}>Button fr HelloComponent</button>
  );
}
export default function App() {
  return (
    <div>
     {/* Place the entire component here */}
      <SayHelloComponent />
    </div> 
  );
}

// OnChange
function EchoComponent() {
  function printContent() {
    console.log(event.target.value)
  }
  return <input
  type='text'
  onChange={printContent}
  />
}
//onCHange EVENT
export default function App() {
  const [message, setMessage] = useState(''); //message value is empty string

  return(
    <div>
      <h2>onChange Event:</h2>
      <input 
        type='text'
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // e is object(can be any letter), stores value in browser. call setMessage function, change the target value variable
      />
      <p>"You typed: {message}"</p>
    </div>
  )
}