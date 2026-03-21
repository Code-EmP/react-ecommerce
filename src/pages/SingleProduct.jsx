import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  const product = {
    name: "Gaming Laptop",
    oldPrice: 2000,
    price: 1499,
    discount: 25,
    rating: 4,
    image: "https://via.placeholder.com/400x300?text=Gaming+Laptop",
    description: "High-performance gaming laptop with latest specs"
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          
          <div className="mb-3 text-warning">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-star ${index < product.rating ? 'fas' : 'far'}`}
              />
            ))}
          </div>

          <div className="mb-3">
            <span className="text-muted text-decoration-line-through me-2">
              ${product.oldPrice}
            </span>
            <span className="h4 text-danger">${product.price}</span>
          </div>

          <button className="btn btn-primary btn-lg">
            <i className="fas fa-shopping-cart me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
