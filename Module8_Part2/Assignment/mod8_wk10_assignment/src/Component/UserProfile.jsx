import React from "react";
import { useState, useEffect } from "react";

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((res) => res.json())
            .then((data) => {
                console.log("data received", data)
                const firstuser = data[0];
                setUser(firstuser);
                setLoading(false); // Data is ready, stop loading
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []); // Run only once when the page loads

    if (loading) return <p>Loading data...</p>
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user?.address?.street}, {user?.address?.city}</p>
        </div>
    );
}
export default UserProfile;

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