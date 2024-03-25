import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({
  name,
  options,
  containerStyle,
  labelStyle,
  selectStyle,
}) {
  const styles = {
    container: containerStyle || {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 0',
    },
    label: labelStyle || {
      marginBottom: '10px',
    },
    select: selectStyle || {
      cursor: 'pointer',
      padding: '5px 10px',
      fontSize: 'medium',
      backgroundColor: '#f6f6f6',
      borderRadius: '5px',
    },
  };
  return (
    <div style={styles.container}>
      <label htmlFor={name} style={styles.label}>
        {name}
      </label>
      <select name={name} id={name} style={styles.select}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  /**
   * The content of label and select
   */
  name: PropTypes.string,
  /**
   * The content of option
   */
  options: PropTypes.object,
};
