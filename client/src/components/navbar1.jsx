import React from 'react';

export default function Header() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent overlay
        overflow: 'hidden', // Prevents overflow of navigation bar
      }}
    >
      {/* Left Side - Logo */}
      <div>
        <img src="/logo.png" alt="Jetwing Travels" style={{ height: '50px' }} />
      </div>

      {/* Center - Navigation Links */}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'white',
          justifyContent: 'center', // Center the navigation links
          marginLeft: 'auto',
          overflow: 'hidden', // Hide any overflow
          width: '100%', // Ensure the navigation bar spans the entire width
          textAlign: 'center', // Align links properly in the center
        }}
      >
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</a>
        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>ABOUT US</a>
        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>DESTINATIONS</a>
        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>EXPERIENCES</a>
        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>TOURS</a>
        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>CONTACT US</a>
      </div>
    </nav>
  );
}
