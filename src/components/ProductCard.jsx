import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const favorite = isInWishlist(product.id);

  return (
    <div className="card h-100 shadow-sm">
      {/* Image wrapper for zoom and badge */}
      <div className="product-img-wrapper position-relative">
        {/* Sale badge */}
        {product.discount && (
          <div className="sale-badge">-{product.discount}%</div>
        )}

        <button
          className="btn btn-link favorite-btn"
          onClick={() => toggleWishlist(product)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 2,
            color: favorite ? 'red' : '#666',
            textDecoration: 'none',
          }}
          aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <i className={favorite ? 'fas fa-heart fa-lg' : 'far fa-heart fa-lg'} />
        </button>

        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>

        {/* Star rating */}
        <div className="mb-2 text-warning">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-star ${index < product.rating ? 'fas' : 'far'}`}
            />
          ))}
        </div>

        {/* Price section */}
        <div className="mb-2">
          <span className="text-muted text-decoration-line-through me-2">
            {product.oldPrice}
          </span>
          <span className="fw-bold text-danger">
            {product.price}
          </span>
        </div>

        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );

  
};


export default ProductCard;