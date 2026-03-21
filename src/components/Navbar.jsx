import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const safeCart = Array.isArray(cart) ? cart : [];
  const totalqty = safeCart.reduce((sum, item) => sum + (item?.qty ?? 0), 0);

  const { wishlist } = useContext(WishlistContext);
  const favoriteCount = Array.isArray(wishlist) ? wishlist.length : 0;

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/"><img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82f71398-d7aa-4e9b-857b-802297bf8c16/dgd1mc9-93199fc6-d1df-4fe2-9695-3cca1052b600.png/v1/fill/w_1280,h_1280/kamen_rider_next_faiz_logo_by_driftingcar_dgd1mc9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi84MmY3MTM5OC1kN2FhLTRlOWItODU3Yi04MDIyOTdiZjhjMTYvZGdkMW1jOS05MzE5OWZjNi1kMWRmLTRmZTItOTY5NS0zY2NhMTA1MmI2MDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.agCzSdBlmcSVcY4UmXmWxrT-TSJZH-E_wDXeCKLp7hw' width="60" height="60"></img></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/policy">Policy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                  <span className="badge bg-danger ms-1">({totalqty})</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/wishlist">
                  <i className="fa fa-heart"></i>
                  <span className="badge bg-danger ms-1">({favoriteCount})</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* =============== MOBILE BOTTOM NAVIGATION =============== */}
      <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
        <div className="container-fluid d-flex justify-content-around text-center">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none'
                : 'text-dark text-decoration-none'
            }
          >
            <div>
              <i className="fa fa-home fs-5"></i>
              <div style={{ fontSize: '12px' }}>Home</div>
            </div>
          </NavLink>

          {/* Products */}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none'
                : 'text-dark text-decoration-none'
            }
          >
            <div>
              <i className="fa fa-box fs-5"></i>
              <div style={{ fontSize: '12px' }}>Products</div>
            </div>
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none position-relative'
                : 'text-dark text-decoration-none position-relative'
            }
          >
            <div className="position-relative">
              <i className="fa fa-shopping-cart fs-5"></i>
              {totalqty > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '10px' }}
                >
                  {totalqty}
                </span>
              )}
            </div>
            <div style={{ fontSize: '12px' }}>cart</div>
          </NavLink>

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none position-relative'
                : 'text-dark text-decoration-none position-relative'
            }
          >
            <div className="position-relative">
              <i className="fa fa-heart fs-5"></i>
              {favoriteCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '10px' }}
                >
                  {favoriteCount}
                </span>
              )}
            </div>
            <div style={{ fontSize: '12px' }}>wishlist</div>
          </NavLink>

          {/* Theme Toggle */}
          <div className="text-center">
            <button
              className="btn btn-link text-decoration-none"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div>
                <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'} fs-5`}></i>
              </div>
              <div style={{ fontSize: '12px' }}>{isDarkMode ? 'light' : 'dark'}</div>
            </button>
          </div>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none'
                : 'text-dark text-decoration-none'
            }
          >
            <div>
              <i className="fa fa-info-circle fs-5"></i>
              <div style={{ fontSize: '12px' }}>about</div>
            </div>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-primary text-decoration-none'
                : 'text-dark text-decoration-none'
            }
          >
            <div>
              <i className="fa fa-phone fs-5"></i>
              <div style={{ fontSize: '12px' }}>contact</div>
            </div>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
