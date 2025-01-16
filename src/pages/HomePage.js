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
          {/* Navbar */}
          <nav className="navbar flex justify-between items-center py-4">
            <div className="logo">
              <img src="/logo.png" alt="Fitness Club Logo" className="w-16" /> {/* Replace with your logo */}
            </div>
            <ul className="nav-links flex gap-6">
              <li><a href="#home" className="text-gray-700 hover:text-red-500">Home</a></li>
              <li><a href="#exercises" className="text-gray-700 hover:text-red-500">Exercises</a></li>
            </ul>
          </nav>

          {/* Hero Section */}
          <section className="main-section flex justify-between items-center py-16 px-8">
            <div className="text-content text-left max-w-lg">
              <h1 className="text-4xl font-bold text-red-500">Fitness Club</h1>
              <h2 className="text-3xl font-semibold text-gray-800 mt-4">Sweat, Smile<br />And Repeat</h2>
              <p className="text-gray-600 mt-4">Check out the most effective exercises personalized to you</p>
              <button className="mt-6 px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">Explore Exercises</button>
            </div>

            <div className="image-content">
              <img 
                src="/exercise-image.png" 
                alt="Fitness Model" 
                className="fitness-image max-w-md rounded-lg shadow-lg" 
              /> {/* Replace with your image */}
            </div>
          </section>

          {/* Footer Background Text */}
          <div className="footer-background-text absolute bottom-10 left-5 text-[10rem] text-gray-100 font-bold opacity-10">
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
