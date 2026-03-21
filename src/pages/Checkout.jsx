import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod',
  });

  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const [orderNumber] = useState(`RT-${Date.now().toString().slice(-8)}`);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 2500 ? 0 : 50;
  const tax = subtotal * 0.12;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert('Please complete all fields');
      return;
    }

    setFinalTotal(total);

    if (typeof clearCart === 'function') {
      clearCart();
    }

    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const formatPrice = (value) => {
    return value.toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Success Page
  if (submitted) {
    return (
      <div className="checkout-success py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg text-center">
                <div className="card-body py-5">
                  <div className="success-icon mb-4">
                    <i className="fas fa-check-circle fa-5x text-success"></i>
                  </div>
                  <h2 className="display-5 fw-bold text-success mb-3">Order Confirmed!</h2>
                  <p className="lead text-muted mb-4">
                    Thank you, <strong>{form.name}</strong>! Your order has been successfully placed.
                  </p>
                  
                  <div className="order-details bg-light rounded p-4 mb-4">
                    <div className="mb-3">
                      <p className="text-muted mb-1">Order Number</p>
                      <h4 className="fw-bold text-danger mb-0">{orderNumber}</h4>
                    </div>
                    <div className="mb-3">
                      <p className="text-muted mb-1">Total Amount</p>
                      <h3 className="fw-bold text-success mb-0">₱{formatPrice(finalTotal)}</h3>
                    </div>
                    <div>
                      <p className="text-muted mb-1">Payment Method</p>
                      <p className="fw-bold mb-0">
                        {form.payment === 'cod' ? 'Cash on Delivery' : 
                         form.payment === 'gcash' ? 'GCash' : 'Credit Card'}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted mb-4">
                    A confirmation email has been sent to <strong>{form.email}</strong>
                  </p>

                  <div className="d-grid gap-2">
                    <a href="/products" className="btn btn-danger btn-lg">
                      <i className="fas fa-store me-2"></i>Continue Shopping
                    </a>
                    <a href="/" className="btn btn-outline-secondary">
                      <i className="fas fa-home me-2"></i>Back to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Checkout Page
  return (
    <div className="checkout-page py-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/" className="text-decoration-none">Home</a></li>
                <li className="breadcrumb-item"><a href="/cart" className="text-decoration-none">Cart</a></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
            <h1 className="display-5 fw-bold text-danger">
              <i className="fas fa-credit-card me-3"></i>Checkout
            </h1>
            <p className="text-muted">Complete your order securely</p>
          </div>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm text-center py-5">
                <div className="card-body">
                  <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                  <h3 className="h4 fw-bold mb-3">Your cart is empty</h3>
                  <p className="text-muted mb-4">Add some items before checking out</p>
                  <a href="/products" className="btn btn-danger btn-lg">
                    <i className="fas fa-store me-2"></i>Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {/* Left Column - Checkout Form */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit}>
                {/* Customer Information */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-danger text-white py-3">
                    <h3 className="h5 fw-bold mb-0">
                      <i className="fas fa-user me-2"></i>Customer Information
                    </h3>
                  </div>
                  <div className="card-body p-4">
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control form-control-lg"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Juan Dela Cruz"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="juan@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control form-control-lg"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0917 123 4567"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="address" className="form-label">Complete Address *</label>
                        <textarea
                          id="address"
                          name="address"
                          className="form-control"
                          value={form.address}
                          onChange={handleChange}
                          rows={3}
                          placeholder="House/Building No., Street, Barangay, City/Municipality, Province"
                          required
                        ></textarea>
                        <div className="form-text">
                          We'll use this address for shipping your order
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-danger text-white py-3">
                    <h3 className="h5 fw-bold mb-0">
                      <i className="fas fa-wallet me-2"></i>Payment Method
                    </h3>
                  </div>
                  <div className="card-body p-4">
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="form-check payment-option p-3 border rounded mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="cod"
                            value="cod"
                            checked={form.payment === 'cod'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label w-100" htmlFor="cod">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <i className="fas fa-money-bill-wave text-success me-2"></i>
                                <strong>Cash on Delivery</strong>
                                <p className="mb-0 text-muted small">Pay when you receive your order</p>
                              </div>
                            </div>
                          </label>
                        </div>

                        <div className="form-check payment-option p-3 border rounded mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="gcash"
                            value="gcash"
                            checked={form.payment === 'gcash'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label w-100" htmlFor="gcash">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <i className="fas fa-mobile-alt text-primary me-2"></i>
                                <strong>GCash</strong>
                                <p className="mb-0 text-muted small">Pay via GCash mobile wallet</p>
                              </div>
                              <i className="fab fa-google-pay fa-2x text-muted"></i>
                            </div>
                          </label>
                        </div>

                        <div className="form-check payment-option p-3 border rounded">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="card"
                            value="card"
                            checked={form.payment === 'card'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label w-100" htmlFor="card">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <i className="fas fa-credit-card text-danger me-2"></i>
                                <strong>Credit/Debit Card</strong>
                                <p className="mb-0 text-muted small">Pay securely with your card</p>
                              </div>
                              <div>
                                <i className="fab fa-cc-visa fa-lg text-muted mx-1"></i>
                                <i className="fab fa-cc-mastercard fa-lg text-muted mx-1"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-danger btn-lg py-3">
                    <i className="fas fa-lock me-2"></i>Place Order - ₱{formatPrice(total)}
                  </button>
                </div>

                {/* Security Notice */}
                <div className="text-center mt-3">
                  <p className="text-success mb-1">
                    <i className="fas fa-shield-alt me-1"></i>
                    <strong>Secure Checkout</strong>
                  </p>
                  <small className="text-muted">Your information is protected with 256-bit SSL encryption</small>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="col-lg-5">
              <div className="order-summary card border-0 shadow-sm sticky-top" style={{top: '20px'}}>
                <div className="card-header bg-danger text-white py-3">
                  <h3 className="h5 fw-bold mb-0">
                    <i className="fas fa-receipt me-2"></i>Order Summary
                  </h3>
                </div>
                <div className="card-body p-4">
                  {/* Cart Items */}
                  <div className="cart-items mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item d-flex justify-content-between align-items-center py-2 mb-3 pb-3 border-bottom">
                        <div className="d-flex align-items-center">
                          <div className="product-image bg-light rounded me-3 d-flex align-items-center justify-content-center" 
                               style={{width: '60px', height: '60px', minWidth: '60px'}}>
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="img-fluid rounded" />
                            ) : (
                              <i className="fas fa-box text-muted"></i>
                            )}
                          </div>
                          <div>
                            <p className="mb-0 fw-bold">{item.name}</p>
                            <small className="text-muted">Qty: {item.qty}</small>
                          </div>
                        </div>
                        <span className="fw-bold">₱{formatPrice(item.price * item.qty)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="pricing-section">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Subtotal</span>
                      <span className="fw-bold">₱{formatPrice(subtotal)}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Shipping</span>
                      <span className="fw-bold">
                        {shipping === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `₱{formatPrice(shipping)}`
                        )}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Tax (12%)</span>
                      <span className="fw-bold">₱{formatPrice(tax)}</span>
                    </div>

                    {shipping > 0 && (
                      <div className="alert alert-info small py-2 mb-3">
                        <i className="fas fa-info-circle me-1"></i>
                        Add ₱{formatPrice(2500 - subtotal)} more for free shipping!
                      </div>
                    )}

                    <hr className="my-3" />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="h5 fw-bold mb-0">Total</span>
                      <span className="h3 fw-bold text-danger mb-0">₱{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="trust-badges text-center pt-3 border-top">
                    <div className="row g-2">
                      <div className="col-4">
                        <i className="fas fa-lock fa-2x text-success mb-1"></i>
                        <p className="small mb-0">Secure</p>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-shipping-fast fa-2x text-primary mb-1"></i>
                        <p className="small mb-0">Fast Shipping</p>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-undo fa-2x text-danger mb-1"></i>
                        <p className="small mb-0">Returns</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;