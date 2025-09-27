import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 p-4 mb-6 flex justify-between items-center">
      <h2 className="text-2xl font-title">Elite League</h2>
      <nav>
        <a href="#table" className="mr-4">Tabla</a>
        <a href="#calendar">Calendario</a>
      </nav>
    </header>
  );
}

export default Header;