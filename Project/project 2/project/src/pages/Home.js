import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our Online Store</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="features">
          <div className="feature">
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="feature">
            <h3>30-Day Returns</h3>
            <p>Hassle-free returns</p>
          </div>
          <div className="feature">
            <h3>Secure Payment</h3>
            <p>100% secure transactions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;