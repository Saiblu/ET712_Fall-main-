import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // Simple dev logger without preventing navigation
  const logNavClick = (path, linkText) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('DEV NAV CLICK', { path, link: linkText });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">FashionStore</Link>

        <div className="nav-links">
          <Link to="/" onClick={() => logNavClick('/', 'Home')}>Home</Link>
          <Link to="/category/men" onClick={() => logNavClick('/category/men', 'Men')}>Men</Link>
          <Link to="/category/women" onClick={() => logNavClick('/category/women', 'Women')}>Women</Link>
          <Link to="/category/kids" onClick={() => logNavClick('/category/kids', 'Kids')}>Kids</Link>
          <Link to="/category/accessories" onClick={() => logNavClick('/category/accessories', 'Accessories')}>Accessories</Link>
          <Link to="/cart" className="cart-link" onClick={() => logNavClick('/cart', 'Cart')}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;