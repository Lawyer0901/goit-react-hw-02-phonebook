export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}
            <span>{number}</span>
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
}
