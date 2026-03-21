import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Your Wishlist</h2>
        <Link to="/products" className="btn btn-outline-primary">
          Browse Products
        </Link>
      </div>

      {wishlist.length === 0 ? (
        <div className="alert alert-info">No favorites yet. Add something to your wishlist!</div>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <ProductCard product={product} />
              <button className="btn btn-sm btn-danger mt-2" onClick={() => removeFromWishlist(product.id)}>
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
