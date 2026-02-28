import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Buisnesslist from './components/Buisnesslist/Buisnesslist.jsx'
import Footer from './components/Footer/Footer.jsx'
import Authentication from './components/Authentication/Authentication.jsx'

function App() {
  const [count, setCount] = useState(0)

  // authentication state lifted to top
  const [token, setToken] = React.useState(localStorage.getItem('token') || null);
  const [username, setUsername] = React.useState(localStorage.getItem('username') || null);
  const [authError, setAuthError] = React.useState(null);
  const [authModal, setAuthModal] = React.useState(null); // 'login' | 'register' | null

  // search state
  const [searchQuery, setSearchQuery] = React.useState('');

  const apiBase = import.meta.env.VITE_API_BASE || '';

  const loginUser = async (user, pass) => {
    try {
      const res = await fetch(apiBase + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
      });
      const text = await res.text();
      let data = {};
      try { data = text ? JSON.parse(text) : {}; } catch (e) { data = {}; }
      if (!res.ok) throw new Error(data.error || 'login failed');
      setToken(data.token);
      setUsername(data.username);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      setAuthError(null);
      setAuthModal(null);
      return true;
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  };

  const registerUser = async (user, email, pass) => {
    try {
      const res = await fetch(apiBase + '/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, email, password: pass })
      });
      const text = await res.text();
      let data = {};
      try { data = text ? JSON.parse(text) : {}; } catch (e) { data = {}; }
      if (!res.ok) throw new Error(data.error || 'registration failed');
      // after registration, auto login
      return await loginUser(user, pass);
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <div className="app-container">
      <Navbar
        onSignIn={() => setAuthModal('login')}
        onGetStarted={() => setAuthModal('register')}
      />

      <Authentication
        mode={authModal}
        onLogin={loginUser}
        onRegister={registerUser}
        onClose={() => setAuthModal(null)}
        error={authError}
      />

      <main className="main-content">
        <Hero onSearch={setSearchQuery} />
        <Buisnesslist 
          token={token} 
          username={username} 
          onRequestAuth={mode => setAuthModal(mode)} 
          searchQuery={searchQuery}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
