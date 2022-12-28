import PropTypes from 'prop-types';
import { Text } from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Text>
            {name}
            <span>{number}</span>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete Contact
            </button>
          </Text>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteData: PropTypes.func,
};
