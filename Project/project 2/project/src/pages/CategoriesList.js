import { Link } from 'react-router-dom';

const categories = [
  { key: 'men', label: 'Men', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop' },
  { key: 'women', label: 'Women', img: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&h=400&fit=crop' },
  { key: 'kids', label: 'Kids', img: 'https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?w=600&h=400&fit=crop' },
  { key: 'accessories', label: 'Accessories', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop' }
];

const CategoriesList = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Categories</h1>
      <p className="page-subtitle">Browse by category</p>

      <div className="categories-grid">
        {categories.map(cat => (
          <Link to={`/category/${cat.key}`} key={cat.key} className="category-card">
            <div className="category-image-wrapper">
              <img src={cat.img} alt={cat.label} loading="lazy" />
            </div>
            <div className="category-label">{cat.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;