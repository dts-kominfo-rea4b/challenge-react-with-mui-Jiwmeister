import React from 'react'

// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import './Header.css'

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Call a Friend</h1>
      <p className="header__text">Your firendly contact app</p>
    </header>
  );
};
