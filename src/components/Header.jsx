import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header bg-white shadow-sm">
      <div className="container">
        <div className="row align-items-center py-3">
          {/* Social Media Links - Left */}
          <div className="col-md-4 col-6">
            <div className="social-links d-flex align-items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-danger text-decoration-none">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-danger text-decoration-none">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger text-decoration-none">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-danger text-decoration-none">
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Logo/Title - Center */}
          <div className="col-md-4 col-12 text-center">
            <Link to="/" className="text-decoration-none">
              <div className="d-flex align-items-center justify-content-center">
                <i className="fas fa-mask fa-2x text-danger me-2"></i>
                <div className="text-start">
                  <h1 className="h3 mb-0 fw-bold text-danger">Rider Time!</h1>
                  <small className="text-muted">Tokusatsu Store</small>
                </div>
              </div>
            </Link>
          </div>

          {/* Empty right column for balance */}
          <div className="col-md-4 d-none d-md-block">
            {/* Spacer */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;