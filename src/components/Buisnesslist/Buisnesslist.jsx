import React from 'react'
import './Buisnesslist.css'

// images need to be imported so that webpack/vite can bundle them
import italianKitchen from '../../assets/Images/Italian kitchen.PNG'
import bookshopImage from '../../assets/Images/Bookshop.PNG'
import zenSpa from '../../assets/Images/Saloon and spa.PNG'

function Buisnesslist() {
  // state for filters
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const businesses = [
    {
      id: 1,
      name: "Bella's Italian Kitchen",
      category: "Restaurant",
      image: italianKitchen,
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
      image: bookshopImage,
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
      image: zenSpa,
      rating: 4.8,
      reviews: 203,
      description: "Full-service spa and salon offering relaxation treatments, haircare, and beauty services in a tranquil setting.",
      address: "987 Willow Way, Wellness Plaza",
      deal: true
    },
    {
      id: 4,
      name: "The Daily Grind Café",
      category: "Cafe",
      image: italianKitchen,
      rating: 4.5,
      reviews: 134,
      description: "Cozy coffee shop with artisanal drinks and homemade pastries.",
      address: "123 Maple Street, Downtown",
      deal: false
    },
    {
      id: 5,
      name: "Cornerstone Fitness",
      category: "Gym",
      image: bookshopImage,
      rating: 4.3,
      reviews: 76,
      description: "Modern gym with personal training and group classes.",
      address: "321 Fitness Ave, Uptown",
      deal: true
    },
    {
      id: 6,
      name: "Pet Haven Boutique",
      category: "Pet Store",
      image: zenSpa,
      rating: 4.7,
      reviews: 54,
      description: "All-natural pet food and accessories, plus grooming services.",
      address: "654 Paws Road, Suburbia",
      deal: false
    },
    {
      id: 7,
      name: "Starlight Cinema",
      category: "Entertainment",
      image: italianKitchen,
      rating: 4.6,
      reviews: 210,
      description: "Independent movie theater showing classic and indie films.",
      address: "987 Film Blvd, Arts District",
      deal: true
    },
    {
      id: 8,
      name: "Bloom & Grow Florist",
      category: "Florist",
      image: bookshopImage,
      rating: 4.9,
      reviews: 122,
      description: "Fresh floral arrangements and plant care advice.",
      address: "258 Blossom Lane, Garden District",
      deal: false
    },
    {
      id: 9,
      name: "Techie Toys",
      category: "Electronics",
      image: zenSpa,
      rating: 4.4,
      reviews: 98,
      description: "Gadgets and gizmos for tech enthusiasts.",
      address: "147 Silicon Street, Tech Park",
      deal: true
    }
  ]

  // derive category list from businesses
  const categories = React.useMemo(() => {
    const cats = new Set(businesses.map(b => b.category));
    return ['All', ...cats];
  }, [businesses]);

  // filter businesses according to selectedCategory
  const filtered = React.useMemo(() => {
    if (selectedCategory === 'All') return businesses;
    return businesses.filter(b => b.category === selectedCategory);
  }, [selectedCategory, businesses]);

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
          <h2>Showing {filtered.length} businesses</h2>
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={cat === selectedCategory ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="businesses-grid">
          {filtered.map((business) => (
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
