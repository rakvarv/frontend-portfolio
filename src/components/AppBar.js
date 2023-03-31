import React from 'react';

export default function Appbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{ backgroundColor: 'transparent', border: 'none', marginRight: '1rem', cursor: 'pointer' }}>
          {/*<MenuIcon />*/}
        </button>
        <h1 style={{ margin: 0 }}>Roald André Kvarv's Portfolio</h1>
      </div>
    </nav>
  );
}
