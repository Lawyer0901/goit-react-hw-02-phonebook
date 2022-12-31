import { Text } from '../ContactList.styled';

export function ContactListItem({ id, name, number, deleteContact }) {
  return (
    <li>
      <Text>
        {name}
        <span>{number}</span>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete Contact
        </button>
      </Text>
    </li>
  );
}
