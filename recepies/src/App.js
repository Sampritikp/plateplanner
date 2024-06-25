import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Create from './Create';

function App() {
  const [page, setPage] = useState('Home'); // Initialize page state with 'Home'

  // Function to handle navigation clicks
  const handleNavClick = (pageName) => {
    setPage(pageName); // Update page state based on the link clicked
  };

  // Render content based on the current page state
  const renderContent = () => {
    switch (page) {
      case 'Home':
        return <Home />;
      case 'Signup':
        return <Signup />;
      case 'Login':
        return <Login />;
      case 'Create':
        return <Create />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar onPageChange={handleNavClick} />
      <div className="main-content">
        {renderContent()} {/* Render the content based on page state */}
      </div>
    </div>
  );
}

export default App;


