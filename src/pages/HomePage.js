// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto my-8 text-center">
        <div className="homepage">
          {/* Hero Section */}
          <section className="main-section flex flex-col md:flex-row justify-between items-center py-16 px-8">
            

            <div className="image-content mt-8 md:mt-0">
              <img 
                src="src/assets/images/home.jpg" 
                alt="Fitness Model" 
                className="fitness-image max-w-md rounded-lg shadow-lg" 
              />
            </div>
          </section>

          {/* Footer Background Text */}
          <div className="footer-background-text absolute bottom-10 left-5 text-[8rem] text-gray-100 font-bold opacity-10">
            Exercise
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;