import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeting} from './Components/props1.jsx'
import {Greeting2, Greeting3, Card, Array} from './Components/props1.jsx' 
import ContactForm from './Components/contact_form.jsx'
import ContactList from './Components/contact_list.jsx'

// function onAdd(contact) {

// }

function App() {
  //const [count, setCount] = useState(0)
  const name = "Kimberly"
  const fruit = ['Apple','Orange','Banana']

  // setContacts → function to update contacts
  const [contacts, setContacts] = useState([]);

  // showList → true/false state to show or hide the contact list
  const [showList, setShowList] = useState(true);

  // Function: Add a new contact
  // 'contact' parameter comes from the ContactForm component
  const addContact = (newcontact) => {
    // Spread syntax: create new array + append new contact
    setContacts([... contacts, newcontact]);
  };

  const deleteContact = (contact_id) => {
    // Filter removes the contact whose id matches
    setContacts(contacts.filter(c => c.id !== contact_id));
  }

  return (
    // <>
    //   <Greeting name={name}/>  
    //   <Greeting2 name="Loh"/>
    //   <Greeting3 name="Kimberly Loh" age={46}/>
    //   <Card title="Product A" description="Prod description" price={20}/>
    //   <Array items={fruit}/>
    // </>
    <>
    <div className="app">
    <h1>Contact Manager</h1>

    {/* Contact form where user adds new contact */}
    <ContactForm onAdd={addContact} />
    {/* <ContactList contacts={contacts} onDelete={deleteContact} /> */}

    {/* Button to show/hide contact list */}
    <button className="toggle-btn" onClick={() => setShowList(!showList)}> 
        {showList ? "Hide Contacts" : "Show Contacts"}
    </button>
    
    {/* Conditional Rendering → if showList is true, show <ContactList> */}
      {showList && (<ContactList contacts={contacts} onDelete={deleteContact} />)}
    </div>
    </> 
  );
}
export default App
