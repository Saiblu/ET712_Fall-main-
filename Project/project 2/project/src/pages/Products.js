import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';

// 12+ Clothing Products for each category
const allProducts = [
  // Men's Clothing (12 products)
  {
    id: 1,
    title: "Men's Casual Shirt",
    description: "Comfortable cotton casual shirt",
    detailedDescription: "100% cotton casual shirt with button-down collar, perfect for everyday wear.",
    price: 39.99,
    originalPrice: 49.99,
    sale: true,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "White", "Gray"]
  },
  {
    id: 2,
    title: "Men's Denim Jeans",
    description: "Classic fit denim jeans",
    detailedDescription: "Premium denim jeans with classic fit and stretch comfort.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.7,
    sizes: ["30x32", "32x32", "34x32", "36x32"],
    colors: ["Blue", "Black"]
  },
  {
    id: 3,
    title: "Men's Leather Jacket",
    description: "Genuine leather biker jacket",
    detailedDescription: "High-quality genuine leather jacket with zip closure and multiple pockets.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.8,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown"]
  },
  {
    id: 4,
    title: "Men's Polo Shirt",
    description: "Classic fit polo shirt",
    detailedDescription: "Breathable polo shirt with embroidered logo and three-button placket.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.4,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Red", "White"]
  },
  {
    id: 5,
    title: "Men's Chino Pants",
    description: "Slim fit chino pants",
    detailedDescription: "Versatile chino pants perfect for casual or business casual occasions.",
    price: 49.99,
    originalPrice: 64.99,
    sale: true,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.3,
    sizes: ["30x30", "32x30", "34x30", "36x30"],
    colors: ["Khaki", "Navy", "Gray"]
  },
  {
    id: 6,
    title: "Men's Sweatshirt",
    description: "Fleece lined hoodie",
    detailedDescription: "Cozy fleece-lined hoodie with kangaroo pocket and adjustable drawstring.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    category: "Men",
    rating: 4.6,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"]
  },

  // Women's Clothing (12 products)
  {
    id: 7,
    title: "Women's Summer Dress",
    description: "Floral print summer dress",
    detailedDescription: "Lightweight floral print dress with adjustable straps and flowy silhouette.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.7,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral", "Blue", "Pink"]
  },
  {
    id: 8,
    title: "Women's Blouse",
    description: "Silk satin blouse",
    detailedDescription: "Elegant silk satin blouse with delicate ruffles and pearl buttons.",
    price: 69.99,
    originalPrice: 89.99,
    sale: true,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.5,
    sizes: ["XS", "S", "M"],
    colors: ["White", "Black", "Blush"]
  },
  {
    id: 9,
    title: "Women's Skinny Jeans",
    description: "High-waist skinny jeans",
    detailedDescription: "Stretchy high-waist skinny jeans with comfortable fit and modern wash.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.4,
    sizes: ["24", "26", "28", "30"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 10,
    title: "Women's Cardigan",
    description: "Oversized knit cardigan",
    detailedDescription: "Cozy oversized cardigan perfect for layering in cooler weather.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.6,
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Gray", "Camel"]
  },
  {
    id: 11,
    title: "Women's Leggings",
    description: "High-waist yoga leggings",
    detailedDescription: "Performance leggings with moisture-wicking fabric and four-way stretch.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1582418702050-f0c8bd9d2e2b?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.8,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Burgundy"]
  },
  {
    id: 12,
    title: "Women's T-shirt",
    description: "Oversized graphic tee",
    detailedDescription: "Soft cotton oversized t-shirt with unique graphic print.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop",
    category: "Women",
    rating: 4.3,
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Gray"]
  },

  // Kids Clothing (12 products)
  {
    id: 13,
    title: "Kids Cartoon T-shirt",
    description: "Colorful cartoon print tee",
    detailedDescription: "Soft cotton t-shirt with fun cartoon characters and vibrant colors.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?w=300&h=400&fit=crop",
    category: "Kids",
    rating: 4.7,
    sizes: ["4T", "5T", "6T", "7"],
    colors: ["Blue", "Red", "Green"]
  },
  {
    id: 14,
    title: "Kids Denim Jacket",
    description: "Denim jacket with patches",
    detailedDescription: "Durable denim jacket with fun embroidered patches and snap buttons.",
    price: 29.99,
    originalPrice: 39.99,
    sale: true,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=300&h=400&fit=crop",
    category: "Kids",
    rating: 4.5,
    sizes: ["5T", "6T", "7", "8"],
    colors: ["Blue", "Black"]
  },
  {
    id: 15,
    title: "Kids Hoodie",
    description: "Fleece-lined pullover hoodie",
    detailedDescription: "Warm fleece-lined hoodie with front pocket and fun character design.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=300&h=400&fit=crop",
    category: "Kids",
    rating: 4.6,
    sizes: ["5T", "6T", "7", "8"],
    colors: ["Red", "Blue", "Gray"]
  },
  {
    id: 16,
    title: "Kids Jeans",
    description: "Stretch denim jeans",
    detailedDescription: "Comfortable stretch denim jeans with reinforced knees for durability.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=400&fit=crop",
    category: "Kids",
    rating: 4.4,
    sizes: ["5T", "6T", "7", "8"],
    colors: ["Blue", "Black"]
  },

  // Accessories (12 products)
  {
    id: 17,
    title: "Leather Belt",
    description: "Genuine leather belt",
    detailedDescription: "Classic genuine leather belt with silver buckle, suitable for all occasions.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"]
  },
  {
    id: 18,
    title: "Designer Handbag",
    description: "Leather crossbody bag",
    detailedDescription: "Stylish leather crossbody bag with adjustable strap and multiple compartments.",
    price: 89.99,
    originalPrice: 119.99,
    sale: true,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.8,
    colors: ["Black", "Tan", "Red"]
  },
  {
    id: 19,
    title: "Sunglasses",
    description: "UV protection sunglasses",
    detailedDescription: "Fashionable sunglasses with 100% UV protection and polarized lenses.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.6,
    colors: ["Black", "Tortoise", "Silver"]
  },
  {
    id: 20,
    title: "Wool Scarf",
    description: "Cashmere blend scarf",
    detailedDescription: "Luxurious cashmere-wool blend scarf for ultimate warmth and comfort.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.7,
    colors: ["Gray", "Navy", "Burgundy"]
  },
  {
    id: 21,
    title: "Leather Wallet",
    description: "Bifold leather wallet",
    detailedDescription: "Slim bifold leather wallet with multiple card slots and cash compartment.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.4,
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 22,
    title: "Watch",
    description: "Analog leather watch",
    detailedDescription: "Classic analog watch with genuine leather strap and minimalist design.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.7,
    colors: ["Black", "Brown", "Blue"]
  },
  {
    id: 23,
    title: "Backpack",
    description: "Canvas backpack",
    detailedDescription: "Durable canvas backpack with laptop sleeve and multiple compartments.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.5,
    colors: ["Khaki", "Black", "Navy"]
  },
  {
    id: 24,
    title: "Baseball Cap",
    description: "Adjustable cotton cap",
    detailedDescription: "Classic baseball cap with adjustable strap and embroidered logo.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.3,
    colors: ["Black", "Navy", "Gray"]
  },
  {
    id: 25,
    title: "Necklace",
    description: "Sterling silver necklace",
    detailedDescription: "Elegant sterling silver necklace with pendant, perfect for any occasion.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.6,
    colors: ["Silver", "Gold"]
  },
  {
    id: 26,
    title: "Earrings",
    description: "Gold hoop earrings",
    detailedDescription: "Classic gold hoop earrings with secure closure and elegant design.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.5,
    colors: ["Gold", "Silver"]
  },
  {
    id: 27,
    title: "Gloves",
    description: "Leather winter gloves",
    detailedDescription: "Warm leather gloves with fleece lining and touchscreen compatibility.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1575908539614-ffd7b3d5afd6?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.4,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brown"]
  },
  {
    id: 28,
    title: "Bracelet",
    description: "Leather wrap bracelet",
    detailedDescription: "Handcrafted leather wrap bracelet with adjustable fit and metal accents.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=400&fit=crop",
    category: "Accessories",
    rating: 4.3,
    colors: ["Brown", "Black"]
  }
];

const Products = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">All Clothing & Accessories</h1>
      <p className="page-subtitle">Discover our complete collection of fashion items</p>
      
      <div className="category-filter">
        <button className="filter-btn active">All Products</button>
        <button className="filter-btn">Men</button>
        <button className="filter-btn">Women</button>
        <button className="filter-btn">Kids</button>
        <button className="filter-btn">Accessories</button>
      </div>
      
      <ProductGrid 
        products={allProducts} 
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Products;