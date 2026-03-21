const About = () => {
  return (
    <div className="container about-page">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">About RiderTime!</h1>
          <p className="lead text-muted">Your Ultimate Destination for Premium Kamen Rider & Tokusatsu Merchandise</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <h2 className="h3 fw-bold mb-4 text-danger">Our Story</h2>
          <p className="text-secondary mb-3">
            Founded in 2026, RiderTime! was born from a simple passion: sharing the incredible 
            world of Kamen Rider and tokusatsu with fans worldwide. As lifelong fans ourselves, 
            we understand the excitement of collecting that perfect figure, the nostalgia of 
            iconic transformation belts, and the joy of displaying premium merchandise that 
            celebrates our favorite heroes.
          </p>
          <p className="text-secondary">
            What started as a small collection shared among friends has grown into a dedicated 
            online store serving thousands of riders across the globe. Every product in our 
            store is carefully selected with the same care and enthusiasm we'd use for our 
            own collections.
          </p>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 fw-bold text-center mb-4 text-danger">Our Mission</h2>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm hover-card">
            <div className="card-body text-center p-4">
              <i className="fas fa-heart fa-3x text-danger mb-3"></i>
              <h3 className="h5 fw-bold">Passion First</h3>
              <p className="text-muted">We're fans serving fans. Every decision we make is guided by what we'd want as collectors ourselves.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm hover-card">
            <div className="card-body text-center p-4">
              <i className="fas fa-medal fa-3x text-danger mb-3"></i>
              <h3 className="h5 fw-bold">Quality Guaranteed</h3>
              <p className="text-muted">Only authentic, high-quality products make it to our store. No compromises, ever.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm hover-card">
            <div className="card-body text-center p-4">
              <i className="fas fa-globe fa-3x text-danger mb-3"></i>
              <h3 className="h5 fw-bold">Global Community</h3>
              <p className="text-muted">Connecting tokusatsu fans worldwide, one package at a time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <h2 className="h3 fw-bold mb-4 text-danger">Why Choose RiderTime?</h2>
          <div className="bg p-4 rounded">
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Authentic Products:</strong> 100% official merchandise from Bandai, Tamashii Nations, and licensed manufacturers
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Fan Expertise:</strong> Our team knows the difference between every Rider form and can help you find exactly what you need
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Competitive Prices:</strong> Great deals without breaking the bank. Regular sales and exclusive offers
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Fast Shipping:</strong> Quick processing and worldwide delivery options
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Secure Packaging:</strong> We know how important mint condition is. We package with collector care
              </li>
              <li>
                <i className="fas fa-check-circle text-success me-2"></i>
                <strong>Customer First:</strong> Easy returns, responsive support, and a satisfaction guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="h3 fw-bold text-center mb-4 text-danger">What We Offer</h2>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-start p-3">
            <i className="fas fa-robot fa-2x text-danger me-3"></i>
            <div>
              <h3 className="h5 fw-bold">Action Figures</h3>
              <p className="text-muted mb-0">From S.H.Figuarts to premium collectibles, find detailed figures of your favorite Riders</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-start p-3">
            <i className="fas fa-tools fa-2x text-danger me-3"></i>
            <div>
              <h3 className="h5 fw-bold">DX Belts & Toys</h3>
              <p className="text-muted mb-0">Authentic transformation belts, Gashats, Ride Watches, and more interactive toys</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-start p-3">
            <i className="fas fa-tshirt fa-2x text-danger me-3"></i>
            <div>
              <h3 className="h5 fw-bold">Accessories</h3>
              <p className="text-muted mb-0">Show your rider pride with everyday carry items.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex align-items-start p-3">
            <i className="fas fa-gem fa-2x text-danger me-3"></i>
            <div>
              <h3 className="h5 fw-bold">Licensed Series</h3>
              <p className="text-muted mb-0">Start your journey with officially licensed Kamen Rider Series!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="bg-primary text-white text-center p-5 rounded">
            <h2 className="h3 fw-bold mb-3">Join the RiderTime Family</h2>
            <p className="mb-4">
              Whether you're a seasoned collector or just starting your tokusatsu journey, 
              we're here to support your passion. Follow us on social media for new arrivals, 
              exclusive deals, and to connect with fellow fans.
            </p>
            <p className="fst-italic mb-0" style={{fontSize: '1.2rem'}}>
              "Henshin with confidence. Collect with passion. Ride with us."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;