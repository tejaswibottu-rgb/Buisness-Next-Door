import React from 'react'
import './Buisnesslist.css'

function Buisnesslist() {
  const businesses = [
    {
      id: 1,
      name: "Bella's Italian Kitchen",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 287,
      description: "Family-owned Italian restaurant serving authentic recipes passed down through generations. Handmade pasta....",
      address: "456 Oak Avenue, Midtown",
      deal: false
    },
    {
      id: 2,
      name: "Pages & Prose Bookshop",
      category: "Bookstore",
      image: "https://images.unsplash.com/photo-150784272343-583f20270319?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      description: "Independent bookstore with a curated selection of fiction, non-fiction, and rare finds. Regular author events and...",
      address: "789 Elm Street, Arts District",
      deal: true
    },
    {
      id: 3,
      name: "Zen Garden Spa & Salon",
      category: "Salon",
      image: "https://images.unsplash.com/photo-1552321554-5fefe6c9ef14?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 203,
      description: "Full-service spa and salon offering relaxation treatments, haircare, and beauty services in a tranquil setting.",
      address: "987 Willow Way, Wellness Plaza",
      deal: true
    }
  ]

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="business-list-section">
      <div className="business-list-container">
        <div className="list-header">
          <h2>Showing 9 businesses</h2>
        </div>

        <div className="businesses-grid">
          {businesses.map((business) => (
            <div key={business.id} className="business-card">
              <div className="card-image-container">
                <img src={business.image} alt={business.name} className="card-image" />
                <span className="category-badge">{business.category}</span>
                {business.deal && <span className="deal-badge">💚 1 Deal</span>}
              </div>

              <div className="card-content">
                <h3 className="business-name">{business.name}</h3>

                <div className="rating-section">
                  {renderStars(business.rating)}
                  <span className="rating-number">{business.rating}</span>
                  <span className="review-count">({business.reviews} reviews)</span>
                </div>

                <p className="business-description">{business.description}</p>

                <div className="business-address">
                  <span className="address-icon">📍</span>
                  <span>{business.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Buisnesslist
