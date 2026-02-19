import React from 'react'
import './Buisnesslist.css'

// images need to be imported so that webpack/vite can bundle them
// note: filenames must match exactly what exists in the Images folder
import italianKitchen from '../../assets/Images/Italiankitchen.PNG'
import bookshopImage from '../../assets/Images/Bookshop.PNG'
import zenSpa from '../../assets/Images/Saloonandspa.PNG'

// additional images (filenames observed in directory):
import cafeImage from '../../assets/Images/cafe.PNG'
import gymImage from '../../assets/Images/gym.PNG'
import petStoreImage from '../../assets/Images/Pet store.PNG'
import cinemaImage from '../../assets/Images/Cinema.PNG'
import floristImage from '../../assets/Images/Florist.PNG'
import techImage from '../../assets/Images/Tech Store.PNG'
// import other files as needed for any new categories

// map categories to their representative image so it's easy to hook up new
// images simply by editing this object
const categoryImages = {
  Restaurant: italianKitchen,
  Bookstore: bookshopImage,
  Salon: zenSpa,
  Cafe: cafeImage,
  Gym: gymImage,
  'Pet Store': petStoreImage,
  Entertainment: cinemaImage,
  Florist: floristImage,
  Electronics: techImage,
  Bakery: cafeImage,      // reuse cafe for now
  Boutique: bookshopImage,
  'Art Gallery': zenSpa,
  // when you add new categories/images, add them here
}

function Buisnesslist() {
  // state for filters
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  // state for sorting dropdown
  const [sortBy, setSortBy] = React.useState('Top Rated');

  const businesses = [
    {
      id: 1,
      name: "Bella's Italian Kitchen",
      category: "Restaurant",
      image: categoryImages['Restaurant'],
      rating: 4.9,
      reviews: 287,
      description: "Family-owned Italian restaurant serving authentic recipes passed down through generations. Handmade pasta....",
      address: "456 Oak Avenue, Midtown",
      phone: "(555) 123-4567",
      website: "https://bellaitaliankitchen.example.com",
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
      deal: true,
      // add a date field for sorting 'newest'
      createdAt: '2023-10-01'
    },
    {
      id: 4,
      name: "The Daily Grind Café",
      category: "Cafe",
      image: categoryImages['Cafe'],
      rating: 4.5,
      reviews: 134,
      description: "Cozy coffee shop with artisanal drinks and homemade pastries.",
      address: "123 Maple Street, Downtown",
      deal: false,
      createdAt: '2024-01-12'
    },
    {
      id: 5,
      name: "Cornerstone Fitness",
      category: "Gym",
      image: categoryImages['Gym'],
      rating: 4.3,
      reviews: 76,
      description: "Modern gym with personal training and group classes.",
      address: "321 Fitness Ave, Uptown",
      deal: true,
      createdAt: '2023-11-20'
    },
    {
      id: 6,
      name: "Pet Haven Boutique",
      category: "Pet Store",
      image: categoryImages['Pet Store'],
      rating: 4.7,
      reviews: 54,
      description: "All-natural pet food and accessories, plus grooming services.",
      address: "654 Paws Road, Suburbia",
      deal: false,
      createdAt: '2024-02-05'
    },
    {
      id: 7,
      name: "Starlight Cinema",
      category: "Entertainment",
      image: categoryImages['Entertainment'] || italianKitchen, // fallback if no specific image
      rating: 4.6,
      reviews: 210,
      description: "Independent movie theater showing classic and indie films.",
      address: "987 Film Blvd, Arts District",
      deal: true,
      createdAt: '2023-09-15'
    },
    {
      id: 8,
      name: "Bloom & Grow Florist",
      category: "Florist",
      image: categoryImages['Florist'] || bookshopImage,
      rating: 4.9,
      reviews: 122,
      description: "Fresh floral arrangements and plant care advice.",
      address: "258 Blossom Lane, Garden District",
      deal: false,
      createdAt: '2024-02-10'
    },
    {
      id: 9,
      name: "Techie Toys",
      category: "Electronics",
      image: categoryImages['Electronics'] || zenSpa,
      rating: 4.4,
      reviews: 98,
      description: "Gadgets and gizmos for tech enthusiasts.",
      address: "147 Silicon Street, Tech Park",
      deal: true,
      createdAt: '2023-12-01'
    },
    // additional sample businesses shown in screenshot
    {
      id: 10,
      name: "Sunrise Bakery",
      category: "Bakery",
      image: categoryImages['Bakery'] || cafeImage,
      rating: 4.7,
      reviews: 64,
      description: "Artisan breads and pastries baked fresh every morning.",
      address: "159 Dough Lane, Market Square",
      deal: false,
      createdAt: '2024-02-12'
    },
    {
      id: 11,
      name: "Chic Boutique",
      category: "Boutique",
      image: categoryImages['Boutique'] || bookshopImage,
      rating: 4.5,
      reviews: 45,
      description: "Curated fashion and home goods from local designers.",
      address: "753 Fashion Ave, Uptown",
      deal: false,
      createdAt: '2024-01-18'
    },
    {
      id: 12,
      name: "Canvas & Colors Art Gallery",
      category: "Art Gallery",
      image: categoryImages['Art Gallery'] || zenSpa,
      rating: 4.8,
      reviews: 98,
      description: "Contemporary art exhibitions and workshops.",
      address: "321 Gallery Row, Arts District",
      deal: true,
      createdAt: '2024-02-14'
    }
  ]

  // derive category list from businesses
  const categories = React.useMemo(() => {
    const cats = new Set(businesses.map(b => b.category));
    return ['All', ...cats];
  }, [businesses]);

  // filter businesses according to selectedCategory
  const filtered = React.useMemo(() => {
    let list = businesses;
    if (selectedCategory !== 'All') {
      list = list.filter(b => b.category === selectedCategory);
    }

    // apply sort
    switch (sortBy) {
      case 'Most Reviewed':
        list = [...list].sort((a, b) => b.reviews - a.reviews);
        break;
      case 'Newest':
        list = [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'Top Rated':
      default:
        list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy, businesses]);

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

  // authentication state (simple stub)
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);

  // reviews storage keyed by business id
  const [reviewsById, setReviewsById] = React.useState({});

  const addReview = (bizId, review) => {
    setReviewsById(prev => {
      const existing = prev[bizId] || [];
      return { ...prev, [bizId]: [...existing, review] };
    });
    // increment count in businesses array (mutable for simplicity)
    const biz = businesses.find(b => b.id === bizId);
    if (biz) biz.reviews += 1;
  };

  const handleCardClick = biz => {
    setSelectedBusiness(biz);
  };

  const goBack = () => setSelectedBusiness(null);

  // if a business is selected render its detail page
  if (selectedBusiness) {
    const biz = selectedBusiness;
    const bizReviews = reviewsById[biz.id] || [];

    return (
      <section className="business-detail-section">
        <button className="back-btn" onClick={goBack}>← Back</button>
        <div className="business-detail-card">
          <h2>{biz.name}</h2>
          <div className="rating-section">
            {renderStars(biz.rating)}
            <span className="rating-number">{biz.rating}</span>
            <span className="review-count">({biz.reviews} reviews)</span>
          </div>
          <p>{biz.description}</p>
          <div className="business-address">
            <span className="address-icon">📍</span>
            <span>{biz.address}</span>
          </div>
          {biz.phone && <div className="business-phone">📞 {biz.phone}</div>}
          {biz.website && (
            <div className="business-website">
              <a href={biz.website} target="_blank" rel="noreferrer">Visit Website</a>
            </div>
          )}

          <div className="reviews-section">
            <h3>Reviews ({bizReviews.length})</h3>
            {!loggedIn && (
              <div className="login-prompt">
                <p>Sign in to leave a review</p>
                <button onClick={() => setLoggedIn(true)}>Sign In</button>
              </div>
            )}
            {loggedIn && (
              <>
                <div className="login-prompt">
                  <p>You're signed in</p>
                  <button onClick={() => setLoggedIn(false)}>Sign Out</button>
                </div>
                <ReviewForm
                  onSubmit={text => {
                    addReview(biz.id, { text, date: new Date().toISOString(), author: 'You' });
                  }}
                />
              </>
            )}
            <ul className="review-list">
              {bizReviews.map((r, idx) => (
                <li key={idx} className="review-item">
                  <div className="review-author">{r.author}</div>
                  <div className="review-text">{r.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
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
          <div className="sort-dropdown">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option>Top Rated</option>
              <option>Most Reviewed</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="businesses-grid">
          {filtered.map((business) => (
<div key={business.id} className="business-card" onClick={() => handleCardClick(business)}>
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
