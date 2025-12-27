import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Message1,Header,Footer,Sidebar,Quote} from './components/Message'
 
export default function App() {

  const name = "John";
  return (
    <>
    <div>
        <p>I am inside div</p>
    </div>
    <p>I am paragraph</p>
    <p>Hello, {name}</p>
    <Profile />
    <Profile2 />
    <Message1 />
    <Quote />
    <Header/>
    <Footer/>
    <Sidebar/>
    </>
  )
}

function Profile(){
  return (
    <>
    <p>I am into profile</p>
    <p>I am also into profile</p>
    </>
  )
}

function Profile2(){
  return(
    <p>I am in profile 2</p>
  )
}



// export default App
/*

Task 1:
Create: <Header />, <Content />. Render both in <App />.

Task 2:
Display a List of Skills -> declare array in javaScript

Task 3:
Create a Button Component-> Use <button> inside the component -> Render three buttons on App page.

Task 4:
Create Product component showing:
Product: Laptop
Price: ₹50,000
Stock: Available
*/

















