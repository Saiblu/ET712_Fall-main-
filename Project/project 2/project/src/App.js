import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/men" element={<MenPage />} />
            <Route path="/category/women" element={<WomenPage />} />
            <Route path="/category/kids" element={<KidsPage />} />
            <Route path="/category/accessories" element={<AccessoriesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;