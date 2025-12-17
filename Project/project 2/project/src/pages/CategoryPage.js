import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

const CategoryPage = () => {
  const { category: paramCategory, subcategory: paramSubcategory } = useParams();
  const navigate = useNavigate();
  const activeCategory = (paramCategory || '').toLowerCase();

  // Debug useEffect
  useEffect(() => {
    console.log('🔍 CategoryPage debug:', {
      paramCategory,
      activeCategory,
      pathname: window.location.pathname
    });
  }, [paramCategory, activeCategory]);

  // Define products grouped with a `type` property so we can create subcategories
  const categoryProducts = {
    men: [
      { id: 1, title: "Casual Shirt", type: "Shirts", price: 39.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop" },
      { id: 2, title: "Denim Jeans", type: "Pants", price: 59.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop" },
      { id: 3, title: "Leather Jacket", type: "Jackets", price: 199.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop" },
      { id: 4, title: "Polo Shirt", type: "Shirts", price: 34.99, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop" },
      { id: 5, title: "Chino Pants", type: "Pants", price: 49.99, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=400&fit=crop" },
      { id: 6, title: "Sweatshirt", type: "Sweaters", price: 44.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop" },
      { id: 25, title: "Dress Shirt", type: "Shirts", price: 54.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop" },
      { id: 26, title: "Shorts", type: "Pants", price: 34.99, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop" },
      { id: 27, title: "Blazer", type: "Jackets", price: 129.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop" }
    ],
    women: [
      { id: 7, title: "Summer Dress", type: "Dresses", price: 49.99, image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=400&fit=crop" },
      { id: 8, title: "Silk Blouse", type: "Tops", price: 69.99, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop" },
      { id: 9, title: "Skinny Jeans", type: "Pants", price: 54.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop" },
      { id: 10, title: "Cardigan", type: "Sweaters", price: 59.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop" },
      { id: 11, title: "Leggings", type: "Pants", price: 39.99, image: "https://images.unsplash.com/photo-1582418702050-f0c8bd9d2e2b?w=300&h=400&fit=crop" },
      { id: 12, title: "T-shirt", type: "Tops", price: 24.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop" },
      { id: 28, title: "Skirt", type: "Dresses", price: 44.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
      { id: 29, title: "Jacket", type: "Jackets", price: 89.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop" },
      { id: 30, title: "Sweater", type: "Sweaters", price: 64.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop" }
    ],
    kids: [
      { id: 13, title: "Cartoon T-shirt", type: "Tops", price: 14.99, image: "https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?w=300&h=400&fit=crop" },
      { id: 14, title: "Denim Jacket", type: "Jackets", price: 29.99, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=300&h=400&fit=crop" },
      { id: 15, title: "Hoodie", type: "Sweaters", price: 24.99, image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=300&h=400&fit=crop" },
      { id: 16, title: "Jeans", type: "Pants", price: 22.99, image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=400&fit=crop" },
      { id: 31, title: "Dress", type: "Dresses", price: 34.99, image: "https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?w=300&h=400&fit=crop" },
      { id: 32, title: "Sneakers", type: "Shoes", price: 39.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop" },
      { id: 33, title: "Backpack", type: "Bags", price: 29.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop" },
      { id: 34, title: "Pajamas", type: "Misc", price: 19.99, image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=300&h=400&fit=crop" },
      { id: 35, title: "Sweater", type: "Sweaters", price: 27.99, image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=300&h=400&fit=crop" }
    ],
    accessories: [
      { id: 17, title: "Leather Belt", type: "Belts", price: 29.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
      { id: 18, title: "Designer Handbag", type: "Bags", price: 89.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop" },
      { id: 19, title: "Sunglasses", type: "Accessories", price: 39.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop" },
      { id: 20, title: "Wool Scarf", type: "Accessories", price: 49.99, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop" },
      { id: 21, title: "Leather Wallet", type: "Accessories", price: 34.99, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop" },
      { id: 22, title: "Watch", type: "Accessories", price: 79.99, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=400&fit=crop" },
      { id: 23, title: "Backpack", type: "Bags", price: 59.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop" },
      { id: 24, title: "Baseball Cap", type: "Accessories", price: 19.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=400&fit=crop" },
      { id: 36, title: "Jewelry Set", type: "Accessories", price: 59.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=400&fit=crop" }
    ]
  };

  // guard if no category
  if (!activeCategory || !categoryProducts[activeCategory]) {
    return <div className="page-container"><h2>Category not found</h2></div>;
  }

  const allProducts = categoryProducts[activeCategory];

  // Optional category-specific landing images (use files you added in public/images)
  const categoryImages = {
    men: [
      '/images/Blue and white shirt.webp',
      '/images/Checkoxford.webp',
      '/images/Red, green, and white shirt.jpg'
    ],
    women: [
      '/images/women-1.svg',
      '/images/women-2.svg',
      '/images/women-3.svg'
    ],
    kids: [
      '/images/kids-1.svg',
      '/images/kids-2.svg',
      '/images/kids-3.svg'
    ],
    accessories: [
      '/images/accessories-1.svg',
      '/images/accessories-2.svg',
      '/images/accessories-3.svg'
    ]
  };

  // pick thumbs from uploaded images when available, otherwise fall back to product images
  const landingThumbs = (categoryImages[activeCategory] && categoryImages[activeCategory].length)
    ? categoryImages[activeCategory].slice(0,4).map((src, idx) => ({ id: `img-${idx}`, title: `${activeCategory} ${idx+1}`, image: src }))
    : allProducts.slice(0,4);

  // Build subcategory list dynamically (unique `type` values)
  const subcategories = useMemo(() => {
    const set = new Set(allProducts.map(p => p.type || 'Misc').map(s => s.toLowerCase()));
    return Array.from(set).map(s => ({
      key: s,
      label: s.charAt(0).toUpperCase() + s.slice(1)
    }));
  }, [allProducts]);

  // Determine active subcategory (from param if present)
  const [activeSub, setActiveSub] = useState(paramSubcategory ? paramSubcategory.toLowerCase() : null);

  useEffect(() => {
    // Keep state in sync when URL changes
    setActiveSub(paramSubcategory ? paramSubcategory.toLowerCase() : null);
  }, [paramSubcategory]);

  // Dev log when category or subcategory changes
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // avoid accessing `filtered` before it's initialized — compute count from available values
      const filteredCount = activeSub
        ? allProducts.filter(p => (p.type || 'misc').toLowerCase() === activeSub).length
        : allProducts.length;

      console.log('DEV CategoryPage:', { paramCategory, paramSubcategory, activeCategory, activeSub, filteredCount });
    }
  }, [paramCategory, paramSubcategory, activeCategory, activeSub, allProducts.length]);

  // Filter products by active subcategory (if set)
  const filtered = activeSub
    ? allProducts.filter(p => (p.type || 'misc').toLowerCase() === activeSub)
    : allProducts;

  const handleSubClick = (subKey) => {
    if (subKey) {
      // navigate to /category/:category/:subcategory
      navigate(`/category/${activeCategory}/${subKey}`);
      setActiveSub(subKey);
    } else {
      navigate(`/category/${activeCategory}`);
      setActiveSub(null);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection</h1>

      {/* Landing / mega menu style area shown above the product grid */}
      <div className="category-landing">
        <div className="landing-left">
          <ul className="landing-list">
            {subcategories.map(sc => (
              <li key={sc.key}>
                <button className={`landing-link ${activeSub === sc.key ? 'active' : ''}`} onClick={() => handleSubClick(sc.key)}>{sc.label}</button>
              </li>
            ))}
            <li>
              <button className={`landing-link ${!activeSub ? 'active' : ''}`} onClick={() => handleSubClick(null)}>View All</button>
            </li>
          </ul>
        </div>

        <div className="landing-right">
          <div className="landing-thumbs">
            {landingThumbs.map(p => (
              <div key={p.id} className="thumb">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="thumb-label">{p.title}</div>
              </div>
            ))}
          </div>

          <div className="landing-sections">
            <h3>THE NEW</h3>
            <ul>
              {allProducts.slice(4,8).map(p=> <li key={p.id}>{p.title}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="subcategory-row">
        <button
          className={`subcat-btn ${!activeSub ? 'active' : ''}`}
          onClick={() => handleSubClick(null)}
        >
          All {activeCategory}
        </button>

        {subcategories.map(sc => (
          <button
            key={sc.key}
            className={`subcat-btn ${activeSub === sc.key ? 'active' : ''}`}
            onClick={() => handleSubClick(sc.key)}
          >
            {sc.label}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} onAddToCart={() => {}} />
    </div>
  );
};

export default CategoryPage;