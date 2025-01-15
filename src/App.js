import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Content of other sections will go here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;