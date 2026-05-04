import React from 'react';
import '../styles/NewsLetter.css';

export default function NewsLetter() {
  return (
    <div className="newsletter">
      {[1,2,3].map(i => (
        <div className="news-card" key={i}>
          <h3>Newsletter {i}</h3>
          <p>Monthly updates and highlights.</p>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
}