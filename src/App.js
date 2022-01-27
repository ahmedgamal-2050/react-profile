import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Intersets from './components/Intersets';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
          <div className="d-flex">
              <div className="profile-card">
                  <Info />
                  <About />
                  <Intersets />
                  <Footer />
              </div>
          </div>
    </div>
  );
}
