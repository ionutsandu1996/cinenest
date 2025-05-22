import React, { useState } from 'react';
import VideoCard from './VideoCard';

const videoData = [
  {
    title: "Cum modifici o Skoda Octavia",
    author: "AutoVlogger",
    views: "54K vizualizări",
    thumbnail: "https://via.placeholder.com/300x180",
    category: "Auto"
  },
  {
    title: "BAC 2025: Matematică explicată",
    author: "EduSmart",
    views: "32K vizualizări",
    thumbnail: "/images/thumb2.jpg",
    category: "Educație"
  },
  {
    title: "Paste Carbonara ca în Italia",
    author: "Chef Andrei",
    views: "21K vizualizări",
    thumbnail: "/images/thumb3.jpg",
    category: "Gătit"
  },
  {
    title: "Cum alegi corect un credit ipotecar",
    author: "FinEdu",
    views: "18K vizualizări",
    thumbnail: "/images/thumb4.jpg",
    category: "Educație"
  }
];

const categories = ["Auto", "Educație", "Gătit"];

export default function CategoryPanel() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredVideos = selectedCategory
    ? videoData.filter(video => video.category === selectedCategory)
    : videoData;

  return (
    <div style={{
      flex: 1,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Butoane categorii */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '999px',
              border: selectedCategory === cat ? '2px solid #000' : '1px solid #ccc',
              backgroundColor: selectedCategory === cat ? '#f0f0f0' : '#fff',
              fontWeight: selectedCategory === cat ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Randare videoclipuri */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredVideos.map((video, idx) => (
    <div
      key={idx}
      style={{
        flex: '0 0 calc((100% - 48px) / 3)', // 3 carduri, 2 gap-uri de 24px = 48px
        boxSizing: 'border-box',
      }}
    >
      <VideoCard
        title={video.title}
        author={video.author}
        views={video.views}
        thumbnail={video.thumbnail}
      />
          </div>
        ))}
      </div>
    </div>
  );
}
