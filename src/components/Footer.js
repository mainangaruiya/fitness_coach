// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Social Media Links */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-sm">&copy; 2025 Fitness App. All Rights Reserved.</p>

          {/* Footer Navigation */}
          <nav>
            <ul className="flex gap-4 text-sm">
              <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
