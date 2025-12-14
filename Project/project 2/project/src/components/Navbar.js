import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setOpen(prev => !prev);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeDropdown = () => setOpen(false);

  const goToCategory = (path, label) => {
    console.log('navigate', label, '->', path);
    closeDropdown();
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">FashionStore</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>

          <div ref={dropdownRef} className={`dropdown ${open ? 'active' : ''}`}>
            <button
              className="dropbtn"
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={open}
              type="button"
            >
              Browse Categories
            </button>

            <div className="dropdown-content" role="menu" aria-label="Categories menu">
              <button type="button" className="dropdown-link" onClick={() => goToCategory('/category/men', 'men')}>Men</button>
              <button type="button" className="dropdown-link" onClick={() => goToCategory('/category/women', 'women')}>Women</button>
              <button type="button" className="dropdown-link" onClick={() => goToCategory('/category/kids', 'kids')}>Kids</button>
              <button type="button" className="dropdown-link" onClick={() => goToCategory('/category/accessories', 'accessories')}>Accessories</button>
            </div>
          </div>

          <Link to="/products">All Products</Link>

          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;