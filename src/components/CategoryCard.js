import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard({ category }) {
  return (
    <div
      style={{
        width: '200px',
        height: '120px',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '1rem',
        transition: 'transform 0.25s',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {category}
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};
