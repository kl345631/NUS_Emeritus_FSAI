import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../components/Profile' 

export default function App() {
  const [count, setCount] = useState(0)
  const people = [
    {
      id: 1193,
      first_name: "Coletta",
      last_name: "Spinka",
      email: "coletta.spinka@email.com",
      avatar: "https://robohash.org/incumqueet.png?size=300x300\u0026set=set1",
      phone_number: "+351 1-215-083-8787 x1674",
      date_of_birth: "1982-04-19",
      employment: { title: "Product Design Officer", key_skill: "Teamwork" }
    },
    {
      id: 1194,
      first_name: "Labby",
      last_name: "Gold",
      email: "labby.gold@email.com",
      avatar: "https://robohash.org/incumqueet.png?size=300x300\u0026set=set2",
      phone_number: "+351 1-215-083-8785 x1675",
      date_of_birth: "1992-04-19",
      employment: { title: "Project Mgr", key_skill: "Project" }
    },
  ]

  const data = people.map(p => {
    return <Profile {...p} key={p.id} />
  });
  
  return <div>{data}</div>

}

// export default App
// Exmple:
// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );