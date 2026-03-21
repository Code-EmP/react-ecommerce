import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FreeShipping from '../assets/images/FreeShipping.jpg';
import NewProduct from '../assets/images/NewProduct.jpg';
import SummerSale from '../assets/images/SummerSale.jpg';

const bannerSlides = [
  {
    id: 1,
    image: SummerSale,
    title: 'Summer Sale',
    description: 'Get up to 50% off on selected items',
  },
  {
    id: 2,
    image: NewProduct,
    title: 'New Arrivals',
    description: 'Check out our latest products',
  },
  {
    id: 3,
    image: FreeShipping,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-ecommerce-backend-fx2i.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.slice(0, 4).map((item, index) => ({
          id: item.id ?? index + 1,
          name: item.name,
          oldPrice: item.oldPrice ?? item.price * 1.25,
          price: item.price,
          discount: item.discount ?? 0,
          rating: Math.round(item.rating ?? 0),
          image: item.image,
        }));
        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid px-0">
      {/* Banner Carousel */}
      <div id="bannerCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {bannerSlides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.title}
                style={{ height: '400px', objectFit: 'contain' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h2 className="mb-3">Featured Products</h2>

        {loading ? (
          <div className="py-4">Loading products...</div>
        ) : (
          <div className="row">
            {products.map((product, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id ?? index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
