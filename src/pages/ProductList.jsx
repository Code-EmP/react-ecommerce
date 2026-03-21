import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Faiz from '../assets/images/Faiz.jpg';
import Faiz2 from '../assets/images/FaizBelt.jpg';
import Hibiki from '../assets/images/Hibiki.jpg';
import W from '../assets/images/W.jpg';
import OOO from '../assets/images/OOO.jpg';
import OOO2 from '../assets/images/OOOBelt.jpg';
import OOO3 from '../assets/images/OOO3.jpg';
import Ex from '../assets/images/ExAid.jpg';
import Stickers from '../assets/images/KRSticker.jpg';
import MP from '../assets/images/KRMP.jpg';
import Bundle from '../assets/images/KRBundle.jpg';
import Series from '../assets/images/KRSeries.jpg';
import Series2 from '../assets/images/KRSeries2.jpg';

const LOCAL_PRODUCTS = [
  { id: 1, name: 'Faiz Figurine', category: 'Figurine', oldPrice: 2000, price: 1499, discount: 25, rating: 4, image: Faiz },
  { id: 2, name: 'Faiz Belt', category: 'Belt', oldPrice: 1000, price: 799, discount: 20, rating: 5, image: Faiz2 },
  { id: 3, name: 'Hibiki Figurine', category: 'Figurine', oldPrice: 1200, price: 899, discount: 20, rating: 5, image: Hibiki },
  { id: 4, name: 'W Belt', category: 'Belt', oldPrice: 700, price: 499, discount: 20, rating: 5, image: W },
  { id: 5, name: 'OOO Figurine', category: 'Figurine', oldPrice: 1500, price: 1199, discount: 20, rating: 5, image: OOO },
  { id: 6, name: 'OOO Belt', category: 'Belt', oldPrice: 800, price: 599, discount: 20, rating: 5, image: OOO2 },
  { id: 7, name: 'OOO3 Figurine', category: 'Figurine', oldPrice: 1500, price: 1199, discount: 20, rating: 5, image: OOO3 },
  { id: 8, name: 'Ex-Aid Belt', category: 'Belt', oldPrice: 700, price: 599, discount: 20, rating: 5, image: Ex },
  { id: 9, name: 'Kamen Rider Stickers', category: 'Sticker', oldPrice: 300, price: 199, discount: 33, rating: 4, image: Stickers },
  { id: 10, name: 'KR Mouse Pad', category: 'Accessory', oldPrice: 200, price: 100, discount: 20, rating: 4, image: MP },
  { id: 11, name: 'Kamen Rider Bundle', category: 'Accessory', oldPrice: 500, price: 399, discount: 20, rating: 5, image: Bundle },
  { id: 12, name: 'Kamen Rider Gavv', category: 'Figurine', oldPrice: 1000, price: 799, discount: 20, rating: 5, image: Series },
  { id: 13, name: 'Kamen Rider Decade', category: 'Figurine', oldPrice: 1000, price: 799, discount: 20, rating: 5, image: Series2 }
];

const ProductList = () => {
  const [products, setProducts] = useState(LOCAL_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetch("https://react-ecommerce-backend-fx2i.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          setLoading(false);
          return;
        }

        const formatted = data.map((item) => ({
          id: item.id || Math.random(),
          name: item.title || item.name || 'Untitled Product',
          category: item.category || (() => {
            const n = (item.title || item.name || '').toLowerCase();
            return n.includes('belt') ? 'Belt'
              : n.includes('figurine') ? 'Figurine'
              : n.includes('sticker') ? 'Sticker'
              : 'Accessory';
          })(),
          oldPrice: item.price ? item.price * 1.25 : 0,
          price: item.price || 0,
          discount: item.discount || 0,
          rating: item.rating?.rate ? Math.round(item.rating.rate) : 0,
          image: item.image || ''
        }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query + category + price range
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const price = Number(product.price || 0);
    const min = Number(minPrice || 0);
    const max = Number(maxPrice || Infinity);
    const matchesMin = minPrice === '' || price >= min;
    const matchesMax = maxPrice === '' || price <= max;

    return matchesName && matchesCategory && matchesMin && matchesMax;
  });

  if (loading) {
    const placeholderItems = Array.from({ length: 8 });
    return (
      <div className="container">
        <div className="mb-4">
          <div className="form-control placeholder-glow" style={{ height: '40px' }}></div>
        </div>
        <div className="row">
          {placeholderItems.map((_, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
              <div className="card h-100 placeholder-glow">
                <div className="card-img-top placeholder" style={{ height: '180px' }}></div>
                <div className="card-body">
                  <h5 className="card-title placeholder col-8"></h5>
                  <p className="card-text placeholder col-6"></p>
                  <p className="card-text placeholder col-4"></p>
                  <div className="d-flex justify-content-between">
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-2"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div
        className="store-banner rounded mb-4"
        style={{
          backgroundImage: 'url(https://static.wikia.nocookie.net/kamenrider/images/5/53/Kamen_Rider_Store_Logo.png/revision/latest/scale-to-width-down/2162?cb=20240829115645)',
        }}
      />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Products</h2>
        <Link to="/" className="btn btn-outline-primary">
          Back to Home
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-6 d-flex gap-2">
          <select
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All categories</option>
            <option value="Figurine">Figurine</option>
            <option value="Belt">Belt</option>
            <option value="Series">Series</option>
            <option value="Accessories">Accessories</option>
          </select>

          <input
            type="number"
            className="form-control"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0"
          />

          <input
            type="number"
            className="form-control"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
          />

          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setCategoryFilter('All');
              setMinPrice('');
              setMaxPrice('');
              setSearchQuery('');
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar />
        </div>
        {/* Products */}
        <div className="col-lg-10 col-md-9">
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && searchQuery && (
            <div className="text-center mt-4">
              <p>No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;