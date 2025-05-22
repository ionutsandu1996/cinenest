import React from 'react';
import PropTypes from 'prop-types';

function CategoryCard({ category }) {
  return (
    <button
      className="px-4 py-2 bg-gray-100 text-sm rounded-full border border-gray-300 whitespace-nowrap hover:bg-gray-200 transition"
    >
      {category}
    </button>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryCard;
