import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 2500 ? 0 : 50;
    const total = subtotal + shipping;

    const formatPrice = (value) => {
        return value.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="cart-page py-5">
            <div className="container">
                {/* Page Header */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1 className="display-5 fw-bold text-danger">
                            <i className="fas fa-shopping-cart me-3"></i>Shopping Cart
                        </h1>
                        <p className="text-muted">
                            {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
                        </p>
                    </div>
                </div>

                {cart.length === 0 ? (
                    /* Empty Cart State */
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card border-0 shadow-sm text-center py-5">
                                <div className="card-body">
                                    <i className="fas fa-shopping-basket fa-4x text-muted mb-3"></i>
                                    <h3 className="h4 fw-bold mb-3">Your cart is empty</h3>
                                    <p className="text-muted mb-4">
                                        Looks like you haven't added any Kamen Rider items yet!
                                    </p>
                                    <Link to="/products" className="btn btn-danger btn-lg">
                                        <i className="fas fa-store me-2"></i>Start Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Cart Items */
                    <div className="row g-4">
                        {/* Left Column - Cart Items */}
                        <div className="col-lg-8">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item card border-0 shadow-sm mb-3">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            {/* Product Info */}
                                            <div className="col-md-5 mb-3 mb-md-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="product-image bg-light rounded me-3 d-flex align-items-center justify-content-center" 
                                                         style={{width: '80px', height: '80px', minWidth: '80px'}}>
                                                        {item.image ? (
                                                            <img src={item.image} alt={item.name} className="img-fluid rounded" />
                                                        ) : (
                                                            <i className="fas fa-box fa-2x text-muted"></i>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1 fw-bold">{item.name}</h5>
                                                        <p className="text-danger fw-bold mb-0">
                                                            ₱{formatPrice(item.price)}
                                                        </p>
                                                        <small className="text-success">
                                                            <i className="fas fa-check-circle me-1"></i>In Stock
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="col-md-4 mb-3 mb-md-0">
                                                <div className="quantity-control d-flex align-items-center justify-content-center gap-2">
                                                    <button
                                                        onClick={() => decreaseQty(item.id)}
                                                        className="btn btn-outline-secondary btn-sm"
                                                        style={{width: '35px', height: '35px'}}
                                                    >
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    
                                                    <span className="fw-bold mx-2" style={{minWidth: '30px'}}>
                                                        {item.qty}
                                                    </span>
                                                    
                                                    <button
                                                        onClick={() => increaseQty(item.id)}
                                                        className="btn btn-outline-secondary btn-sm"
                                                        style={{width: '35px', height: '35px'}}
                                                    >
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Item Total & Remove */}
                                            <div className="col-md-3 text-md-end">
                                                <p className="fw-bold mb-2">
                                                    ₱{formatPrice(item.price * item.qty)}
                                                </p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash me-1"></i>Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Continue Shopping */}
                            <div className="mt-3">
                                <Link to="/products" className="btn btn-outline-danger">
                                    <i className="fas fa-arrow-left me-2"></i>Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="col-lg-4">
                            <div className="order-summary card border-0 shadow-sm sticky-top" style={{top: '20px'}}>
                                <div className="card-header bg-danger text-white py-3">
                                    <h3 className="h5 fw-bold mb-0">
                                        <i className="fas fa-receipt me-2"></i>Order Summary
                                    </h3>
                                </div>
                                <div className="card-body p-4">
                                    <div className="summary-row d-flex justify-content-between mb-3 pb-2">
                                        <span className="text-muted">Subtotal</span>
                                        <span className="fw-bold">₱{formatPrice(subtotal)}</span>
                                    </div>

                                    <div className="summary-row d-flex justify-content-between mb-3 pb-2">
                                        <span className="text-muted">Shipping</span>
                                        <span className="fw-bold">
                                            {shipping === 0 ? (
                                                <span className="text-success">FREE</span>
                                            ) : (
                                                `₱${formatPrice(shipping)}`
                                            )}
                                        </span>
                                    </div>
                                    {shipping > 0 && (
                                        <small className="text-muted d-block mb-3">
                                            Add ₱{formatPrice(2500 - subtotal)} more for free shipping!
                                        </small>
                                    )}

                                    <div className="summary-row d-flex justify-content-between mb-3 pb-2">
                                        <span className="text-muted">Estimated Tax</span>
                                        <span className="fw-bold">₱0.00</span>
                                    </div>

                                    <hr className="my-3" />

                                    <div className="total-row d-flex justify-content-between align-items-center mb-4">
                                        <span className="h5 fw-bold mb-0">Total</span>
                                        <span className="h3 fw-bold text-danger mb-0">
                                            ₱{formatPrice(total)}
                                        </span>
                                    </div>

                                    <Link to="/checkout" className="btn btn-danger btn-lg w-100 mb-3">
                                        <i className="fas fa-lock me-2"></i>Proceed to Checkout
                                    </Link>

                                    {/* Trust Badges */}
                                    <div className="trust-badges text-center">
                                        <p className="text-success mb-2 small">
                                            <i className="fas fa-shield-alt me-1"></i>
                                            <strong>Secure Checkout</strong>
                                        </p>
                                        <div className="payment-icons">
                                            <i className="fab fa-cc-visa fa-lg text-muted mx-1"></i>
                                            <i className="fab fa-cc-mastercard fa-lg text-muted mx-1"></i>
                                            <i className="fab fa-cc-paypal fa-lg text-muted mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits Card */}
                            <div className="benefits-card card border-0 shadow-sm mt-3">
                                <div className="card-body p-3">
                                    <h4 className="h6 fw-bold mb-3">
                                        <i className="fas fa-gift text-danger me-2"></i>Why Shop With Us?
                                    </h4>
                                    <ul className="list-unstyled mb-0 small">
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-success me-2"></i>
                                            Free shipping on orders over ₱2,500
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-success me-2"></i>
                                            100% authentic products
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-success me-2"></i>
                                            30-day return policy
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle text-success me-2"></i>
                                            Secure payment options
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;