const Policy = () => {
    return (
        <div className="container my-5">
            <h1 className="mb-4">Our Policies</h1>
            
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    
                    <div className="mb-5 pb-4 border-bottom">
                        <h2 className="mb-3"><i className="fas fa-truck me-2 text-primary"></i>Shipping Policy</h2>
                        <p>We offer free shipping on all orders over $50. Orders are processed within 1-2 business days and delivered within 5-7 business days. For international orders, please allow 10-14 business days for delivery.</p>
                        <ul className="ms-3">
                            <li>Free shipping on orders over $50</li>
                            <li>Standard shipping: 5-7 business days</li>
                            <li>Express shipping: 2-3 business days (additional fee applies)</li>
                            <li>International shipping available to most countries</li>
                        </ul>
                    </div>

                    <div className="mb-5 pb-4 border-bottom">
                        <h2 className="mb-3"><i className="fas fa-undo me-2 text-primary"></i>Return & Refund Policy</h2>
                        <p>We want you to be completely satisfied with your purchase. If you're not happy with your product, you can return it within 30 days of purchase for a full refund.</p>
                        <ul className="ms-3">
                            <li>30-day return window from date of purchase</li>
                            <li>Products must be in original condition and packaging</li>
                            <li>Free return shipping for defective items</li>
                            <li>Refunds processed within 5-7 business days</li>
                        </ul>
                    </div>

                    <div className="mb-5 pb-4 border-bottom">
                        <h2 className="mb-3"><i className="fas fa-lock me-2 text-primary"></i>Privacy Policy</h2>
                        <p>Your privacy is important to us. We collect personal information only for order processing and customer service purposes. Your data will never be shared with third parties without your consent.</p>
                        <ul className="ms-3">
                            <li>We use SSL encryption for secure transactions</li>
                            <li>Personal information is stored securely</li>
                            <li>No data sharing with third parties</li>
                            <li>You can request to delete your data anytime</li>
                        </ul>
                    </div>

                    <div className="mb-5 pb-4 border-bottom">
                        <h2 className="mb-3"><i className="fas fa-credit-card me-2 text-primary"></i>Payment Policy</h2>
                        <p>We accept all major payment methods including credit cards, debit cards, and digital wallets. All payments are processed securely through our encrypted payment gateway.</p>
                        <ul className="ms-3">
                            <li>Accepted: Visa, Mastercard, American Express</li>
                            <li>Digital wallets: PayPal, Apple Pay, Google Pay</li>
                            <li>All transactions are encrypted and secure</li>
                            <li>No payment information is stored on our servers</li>
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h2 className="mb-3"><i className="fas fa-file-contract me-2 text-primary"></i>Terms & Conditions</h2>
                        <p>By using our website and making purchases, you agree to our terms and conditions. These terms govern the use of our website and the purchase of our products.</p>
                        <ul className="ms-3">
                            <li>All prices are subject to change without notice</li>
                            <li>We reserve the right to refuse or cancel any order</li>
                            <li>Products are sold on an "as-is" basis unless otherwise stated</li>
                            <li>Users must be 18 years or older to make purchases</li>
                            <li>Users that are 17 years old or younger must have parental consent</li>
                        </ul>
                    </div>

                    <div className="bg-light p-4 rounded">
                        <h3 className="mb-3">Questions about our policies?</h3>
                        <p>If you have any questions or concerns about our policies, please don't hesitate to <a href="/contact" className="text-primary">contact us</a>. Our customer service team is here to help!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Policy;