import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label className={css.filterName}> Find contacts by Name </label>
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
