import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
  const favorite = isInWishlist(product.id);
  const [isAdding, setIsAdding] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const formatPrice = (value) => {
    if (typeof value === 'number') {
      return value.toLocaleString('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return value;
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    await addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="product-card card h-100 border-0 shadow-sm">
      {/* Image Section */}
      <div className="product-image-wrapper position-relative overflow-hidden">
        {/* Badges */}
        <div className="badges position-absolute top-0 start-0 p-2 z-3">
          {product.discount && (
            <span className="badge bg-danger rounded-pill me-1 shadow-sm">
              -{product.discount}%
            </span>
          )}
          {product.new && (
            <span className="badge bg-success rounded-pill shadow-sm">NEW</span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="badge bg-warning text-dark rounded-pill shadow-sm">
              Only {product.stock} left!
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="wishlist-btn position-absolute top-0 end-0 p-2 z-3"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <i className={favorite ? 'fas fa-heart text-danger' : 'far fa-heart'}></i>
        </button>

        {/* Product Image */}
        <div className="image-container position-relative">
          <img
            src={product.image}
            className="card-img-top product-img"
            alt={product.name}
            loading="lazy"
          />
          {/* Hover Overlay */}
          <div className={`image-overlay ${showQuickView ? 'show' : ''}`}>
            <button
              className="btn btn-light btn-sm"
              onMouseEnter={() => setShowQuickView(true)}
              onMouseLeave={() => setShowQuickView(false)}
            >
              <i className="fas fa-eye me-1"></i>Quick View
            </button>
          </div>
        </div>

        {/* Quick Add Button (visible on hover) */}
        <div className="quick-add position-absolute bottom-0 start-0 end-0 p-2 z-2">
          <button
            className={`btn btn-danger w-100 py-2 ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding || product.stock === 0}
          >
            {isAdding ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Adding...
              </>
            ) : product.stock === 0 ? (
              <>
                <i className="fas fa-times-circle me-1"></i>Out of Stock
              </>
            ) : (
            <>
              <i className="fas fa-cart-plus me-1"></i>Add to Cart
            </>
            )
            }
          </button>
        </div>
      </div>
      {/* Card Body */}
      <div className="card-body d-flex flex-column p-3">
        {/* Category */}
        {product.category && (
          <small className="text-muted text-uppercase mb-1" style={{ fontSize: '0.7rem' }}>
            {product.category}
          </small>
        )}

        {/* Product Name */}
        <h6 className="card-title fw-bold mb-2 text-dark">
          <a href={`/product/${product.id}`} className="text-decoration-none text-dark stretched-link">
            {product.name}
          </a>
        </h6>

        {/* Star Rating */}
        <div className="rating mb-2">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-star ${index < (product.rating || 0) ? 'fas text-warning' : 'far text-muted'}`}
              style={{ fontSize: '0.85rem' }}
            />
          ))}
          {product.reviewCount && (
            <small className="text-muted ms-1">({product.reviewCount})</small>
          )}
        </div>

        {/* Price */}
        <div className="price-section mb-3">
          {product.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2 small">
              {formatPrice(product.oldPrice)}
            </span>
          )}
          <span className="fw-bold text-danger fs-5">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Add to Cart Button (Mobile/Always Visible) */}
        <button
          className={`btn btn-outline-danger w-100 d-md-none ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding || product.stock === 0}
        >
          {isAdding ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Adding...
            </>
          ) : product.stock === 0 ? (
            'Out of Stock'
          ) : (
            <>
              <i className="fas fa-cart-plus me-2"></i>Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;