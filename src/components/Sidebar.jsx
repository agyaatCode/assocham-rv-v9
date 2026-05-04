import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>ASSOCHAM</h2>
        <p>Knowledge Architect</p>
      </div>

      <nav className="nav-menu">
        <button
          className={`nav-btn ${activeSection === 'knowledge' ? 'active' : ''}`}
          onClick={() => setActiveSection('knowledge')}
        >
          Knowledge Center
        </button>
        <button
          className={`nav-btn ${activeSection === 'media' ? 'active' : ''}`}
          onClick={() => setActiveSection('media')}
        >
          Media Center
        </button>
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 ASSOCHAM India</p>
      </div>
    </div>
  );
};

export default Sidebar;