import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Message1,Header,Footer,Sidebar,Quote} from './components/Message'
import { Greeting1,Greeting2,Greeting3, Card,Array1 } from './components/props1'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

 
export default function App() {

  const name = "John";
  const fruits = ['Ápple','grapes','orange'];
  // contacts → stores all contacts added by user
  // setContacts → function to update contacts
  const [contacts, setContacts] = useState([]);

  // showList → true/false state to show or hide the contact list
  const [showList, setShowList] = useState(true);

  // Function: Add a new contact
  // 'contact' parameter comes from the ContactForm component
  const addContact = (contact) => {
    // Spread syntax: create new array + append new contact
    setContacts([...contacts, contact]);
    console.log(contacts);
  };

  // Function: Delete a contact by id
  const deleteContact = (id) => {
    // Filter removes the contact whose id matches
    setContacts(contacts.filter(c => c.id !== id));
  };


  return (
    <>

    <div className="app">

      {/* Title */}
      <h1>Contact Manager</h1>

      {/* Contact form where user adds new contact */}
      <ContactForm onAdd={addContact} />

      {/* Button to show/hide contact list */}
      <button 
        className="toggle-btn"
        onClick={() => setShowList(!showList)} // toggle true/false
      >
        {showList ? "Hide Contacts" : "Show Contacts"}
      </button>

      {/* Conditional Rendering → if showList is true, show <ContactList> */}
      {showList && (
        <ContactList 
          contacts={contacts}  // passing contacts as props
          onDelete={deleteContact}  // pass delete function as prop
        />
      )}
    </div>


    {/* <div>
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
    <Sidebar/> */}
{/* 
    Props-> properties
    transferring data from one component to another component (Parent -> Child) */}
    {/* <Greeting1 name="John"/>
    <Greeting2 name="Jack"/>
    <Greeting3 name="Sam" age={20}/>
    <Card title="My Product" desc="Ï m shopping" price={80}/>
    <Array1 items={fruits} /> */}

    </>
  );
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

















