import React, { useState } from 'react';
import Signup from './Signup'; 
import Login from './Login';
import './index.css';

const Home = () => {
  const [page, setPage] = useState(""); 

  const handleNavClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="home">
      <header className="header">
        <h1>Welcome</h1>
      </header>

      <main className="main-content">
        <section id="home" className="home-section">
          <h3>FEEL GOOD FOOD!<br />Here you can find and organize all your favorite recipes!</h3>
        </section>
        <nav className="navbar">
          <button onClick={() => handleNavClick("Signup")}>SignUp</button>
          <button onClick={() => handleNavClick("Login")}>Login</button>
        </nav>
      </main>

      <footer className="footer">
        <p>&copy; 2024 PlatePlanner. All rights reserved.</p>
      </footer>

      {page === "Signup" && <Signup />}
      {page === "Login" && <Login />}
    </div>
  );
}

export default Home;
