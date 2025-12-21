export default function ContactList({contacts, onDelete}) {
    if(contacts.length === 0){
        return <p className="empty">No Contacts Added</p>;
    }
    return (
        <ul className="contact-list" >
            {/* iterate over contacts array*/}
            {contacts.map(contact_element => ( 
                <li key={contact_element.id} className="contact-item">
                    <span>
                        <strong>{contact_element.name}</strong>: {contact_element.phone}
                    </span>
                    <button className="delete-btn" onClick={() => onDelete(contact_element.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}