// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-orange-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fitness App</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/exercises" className="hover:text-gray-200">Exercises</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;