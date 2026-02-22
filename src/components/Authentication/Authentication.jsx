import React from 'react';
import './Authentication.css';

export default function Authentication({
  mode,
  onLogin,
  onRegister,
  onClose,
  error
}) {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    // clear fields when mode changes
    setUser('');
    setPass('');
    setEmail('');
  }, [mode]);

  const handleSubmit = e => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin(user, pass);
    } else if (mode === 'register') {
      onRegister(user, email, pass);
    }
  };

  if (!mode) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-box" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{mode === 'login' ? 'Sign In' : 'Get Started'}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />
          {mode === 'register' && (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          )}
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            required
          />
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" className="auth-submit">
            {mode === 'login' ? 'Log In' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
