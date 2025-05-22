import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Menu */}
        <div style={{ width: '200px', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <h3 style={{ marginBottom: '1rem' }}>Categorii</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Toate', 'Auto', 'Educație', 'Gătit', 'Pescuit', 'Călătorii',
              'Imobiliare', 'Podcasturi', 'Live', 'Fotbal', 'Tech',
              'Artă', 'Muzică', 'Fitness', 'Finanțe'
            ].map((cat) => (
              <li key={cat} style={{ marginBottom: '0.5rem' }}>
                <button style={{ width: '100%' }}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Clipuri populare</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            maxWidth: '900px'
          }}>
            {[
              'Auto', 'Educație', 'Gătit', 'Pescuit', 'Călătorii',
              'Imobiliare', 'Educație financiară'
            ].map((cat) => (
              <CategoryCard key={cat} category={cat} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
