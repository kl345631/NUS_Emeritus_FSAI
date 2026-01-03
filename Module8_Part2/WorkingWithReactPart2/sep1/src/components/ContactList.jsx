export default function ContactList({ contacts, onDelete }) {

  // If no contacts, show message
  if (contacts.length === 0) {
    return <p className="empty">No contacts yet.</p>;
  }

  return (
    <ul className="list">
      {/* Loop through contacts array */}
      {contacts.map(contact => (
        <li key={contact.id} className="item">

          {/* Show contact name & phone */}
          <span>
            <strong>{contact.name}</strong> — {contact.phone}
          </span>

          {/* Delete button calls parent's delete function */}
          <button 
            className="delete-btn"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
