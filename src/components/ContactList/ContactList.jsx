import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
