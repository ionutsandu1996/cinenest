import React from 'react';
import PropTypes from 'prop-types';

export default function VideoCard({ title, author, views, thumbnail }) {
  return (
    <div
      style={{
        width: 'calc(33.33% - 12px)', // 3 per rand, gap mai mic
        minWidth: '350px',
        maxWidth: '480px',
        minHeight: '290px', // mai înalt
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      <img
        src={thumbnail}
        alt="thumbnail"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '0.6rem 0.8rem 0.2rem 0.8rem' }}>
        <div style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</div>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>{author}</div>
        <div style={{ fontSize: '0.8rem', color: '#999' }}>{views}</div>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};
