import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import './App.css';

if (process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  const originalWarn = console.warn;
  
  console.error = function(...args) {
    if (args[0] && typeof args[0] === 'string' && 
        args[0].includes('React Router will begin wrapping state updates')) {
      return;
    }
    originalError.apply(console, args);
  };
  
  console.warn = function(...args) {
    if (args[0] && typeof args[0] === 'string' && 
        args[0].includes('React Router will begin wrapping state updates')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

// Root layout keeps Navbar visible and renders children via Outlet
const RootLayout = () => {
  // Dev-only click logger to help find overlays/blocking elements
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const handler = (e) => {
      try {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        console.log('DEV CLICK', {
          clickTarget: `${e.target.tagName}${e.target.id ? `#${e.target.id}` : ''}${e.target.className ? `.${e.target.className}` : ''}`,
          topElementAtPoint: el ? `${el.tagName}${el.id ? `#${el.id}` : ''}${el.className ? `.${el.className}` : ''}` : null,
          coords: { x: e.clientX, y: e.clientY }
        });
      } catch (err) {
        console.log('DEV CLICK handler error', err);
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  // Dev-only route change logger
  const location = useLocation();
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    console.log('DEV ROUTE', { pathname: location.pathname, search: location.search });
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'products', element: <Products /> }, // ← REMOVED
      
      // All categories use the same component
      { path: 'category/men', element: <CategoryPage /> },
      { path: 'category/women', element: <CategoryPage /> },
      { path: 'category/kids', element: <CategoryPage /> },
      { path: 'category/accessories', element: <CategoryPage /> },
      
      // For dynamic categories (if you add more later)
      { path: 'category/:category', element: <CategoryPage /> },
      
      { path: 'cart', element: <CartPage /> }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;