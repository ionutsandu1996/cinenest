import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryPanel from '../components/CategoryPanel';
import { Home, Film, UserCheck, History } from 'lucide-react';

const menuItems = [
  { label: 'Acasă', icon: <Home size={16} /> },
  { label: 'Shorts', icon: <Film size={16} /> },
  { label: 'Abonamente', icon: <UserCheck size={16} /> },
  { label: 'Istoric', icon: <History size={16} /> },
];

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Menu */}
        <div
          style={{
            width: '220px',
            padding: '1rem',
            borderRight: '1px solid #e0e0e0',
            backgroundColor: '#f9f9f9',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
            position: 'sticky',
            top: '64px',
          }}
        >
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Meniu</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item) => (
              <li key={item.label} style={{ marginBottom: '0.5rem' }}>
                <button
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.8rem',
                    border: 'none',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div
          style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // ← aliniere la stânga
    padding: '2rem 1rem 2rem 1rem',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Clipuri populare</h2>
          <CategoryPanel />
        </div>
      </div>

      <Footer />
    </div>
  );
}
