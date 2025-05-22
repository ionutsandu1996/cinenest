import React from 'react';
import { Search } from 'lucide-react';

function Header() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#fff',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    minWidth: '180px',
  };

  const searchWrapperStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 24px',
  };

  const searchBoxStyle = {
    display: 'flex',
    border: '1px solid #d1d5db',
    borderRadius: '9999px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '600px',
  };

  const inputStyle = {
    flex: 1,
    padding: '8px 16px',
    border: 'none',
    outline: 'none',
  };

  const buttonWrapperStyle = {
    display: 'flex',
    gap: '12px',
    minWidth: '200px',
    justifyContent: 'flex-end',
  };

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '9999px',
    border: '1px solid #d1d5db',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
  };

  return (
    <header style={containerStyle}>
      {/* Logo */}
      <div style={logoStyle}>
        <div style={{
          width: 40, height: 24, backgroundColor: 'red', display: 'flex',
          justifyContent: 'center', alignItems: 'center', borderRadius: 4,
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '10px solid white',
            marginLeft: 2
          }} />
        </div>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>VeeZy</span>
      </div>

      {/* Căutare */}
      <div style={searchWrapperStyle}>
        <div style={searchBoxStyle}>
          <input type="text" placeholder="Caută" style={inputStyle} />
          <button style={{
            padding: '0 16px',
            border: 'none',
            backgroundColor: '#f3f4f6',
            borderLeft: '1px solid #d1d5db',
            cursor: 'pointer'
          }}>
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Butoane */}
      <div style={buttonWrapperStyle}>
        <button style={buttonStyle}>Înregistrează-te</button>
        <button style={buttonStyle}>Autentificare</button>
      </div>
    </header>
  );
}

export default Header;
