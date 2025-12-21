import { useState } from "react"; //usestate hook, needed for state management of a component/variable

export default function ContactForm({onAdd}) {
    const [name, setName] = useState(""); //empty state of variable name
    const [phone, setPhone] = useState(""); //empty state of variable phone

      // Function runs when user submits form
    const handleSubmit=(e)=>{
        e.preventDefault(); //prevent page from reloading
        if(!name.trim() || !phone.trim()) {
            alert("Please enter valid name and phone number");
            return;
        }
        const newContact = {
            id: Date.now(), //unique id based on timestamp
            name,
            phone
        };
        console.log(newContact);
        onAdd(newContact); //call onAdd function from props; onAdd is a callback function passed down as a prop from a parent component to your ContactForm child component.
        setName(""); //reset name field as empty
        setPhone(""); //reset phone field
    };
    return (
        //call handleSubmit on form submission
        <form className="form" onSubmit={handleSubmit}> 
            {/* //input field for name , onChange is a event listener that triggers everytime user types a character, e.target refers to input element, target.value is the text in input box*/}
            <input placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/> 
            <input placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <button className="add-btn">Add Contact</button>
        </form>
    );      
}