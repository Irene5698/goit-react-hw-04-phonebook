import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
