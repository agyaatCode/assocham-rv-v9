// PressRelease.jsx
import React from 'react';
import '../styles/PressRelease.css';

export default function PressRelease() {
  return (
    <div className="press-grid">
      {[1,2,3].map(i => (
        <div className="press-card" key={i}>
          <h3>Press Release {i}</h3>
          <p>Official announcements</p>
        </div>
      ))}
    </div>
  );
}