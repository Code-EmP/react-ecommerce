const Contact = () => {
  return (
    <div className="container contact-page py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-danger mb-3">Contact Us</h1>
          <p className="lead text-muted">We'd love to hear from you! Get in touch with our team.</p>
        </div>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-4 text-danger">Get In Touch</h2>
              
              <div className="contact-info">
                <div className="d-flex align-items-start mb-4">
                  <i className="fas fa-envelope fa-lg text-danger me-3 mt-1"></i>
                  <div>
                    <h3 className="h6 fw-bold mb-1">Email Us</h3>
                    <p className="text-muted mb-0">support@ridertime.com</p>
                    <p className="text-muted small">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="fas fa-phone fa-lg text-danger me-3 mt-1"></i>
                  <div>
                    <h3 className="h6 fw-bold mb-1">Call Us</h3>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    <p className="text-muted small">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="fas fa-map-marker-alt fa-lg text-danger me-3 mt-1"></i>
                  <div>
                    <h3 className="h6 fw-bold mb-1">Visit Us</h3>
                    <p className="text-muted mb-0">123 Rider Street<br/>Tokusatsu City, TC 12345<br/>United States</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <i className="fas fa-clock fa-lg text-danger me-3 mt-1"></i>
                  <div>
                    <h3 className="h6 fw-bold mb-1">Business Hours</h3>
                    <p className="text-muted mb-0">Monday - Friday: 9am - 6pm EST<br/>Saturday: 10am - 4pm EST<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-4 pt-3 border-top">
                <h3 className="h6 fw-bold mb-3">Follow Us</h3>
                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-outline-danger btn-sm">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-outline-danger btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-danger btn-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-outline-danger btn-sm">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-8 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-4 text-danger">Send Us a Message</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select className="form-select" id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="orderNumber" className="form-label">Order Number (if applicable)</label>
                  <input type="text" className="form-control" id="orderNumber" placeholder="RT-12345" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea className="form-control" id="message" rows="6" required placeholder="How can we help you?"></textarea>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="newsletter" />
                  <label className="form-check-label text-muted" htmlFor="newsletter">
                    Subscribe to our newsletter for exclusive deals and updates
                  </label>
                </div>

                <button type="submit" className="btn btn-danger btn-lg w-100">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="h3 fw-bold text-center mb-4 text-danger">Frequently Asked Questions</h2>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  How long does shipping take?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Standard shipping takes 5-7 business days within the US. International shipping takes 10-15 business days. Express shipping options are available at checkout.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  What is your return policy?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We offer a 30-day return policy for unopened items in original packaging. Items must be in mint condition. Please contact us first to initiate a return.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Do you ship internationally?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes! We ship to over 50 countries worldwide. International shipping costs are calculated at checkout based on your location and order weight.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Are your products authentic?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Absolutely! All our products are 100% authentic and sourced directly from official manufacturers like Bandai, Tamashii Nations, and other licensed producers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;