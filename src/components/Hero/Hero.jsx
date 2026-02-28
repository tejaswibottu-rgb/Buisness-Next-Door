import React from 'react'
import './Hero.css'

function Hero({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="discover-badge">
          <span className="badge-icon">✨</span>
          Discover Local Gems
        </div>
        <h1 className="hero-title">
          Support Small, <span className="highlight">Shop Local</span>
        </h1>
        <p className="hero-description">
          Find and support amazing local businesses in your neighborhood. Every purchase makes a difference.
        </p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search businesses, categories..." 
            className="search-input"
            value={searchQuery}
            onChange={handleSearch}
            onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
          />
          <button className="search-btn" onClick={handleSearchClick}>🔍</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
