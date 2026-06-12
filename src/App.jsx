import  { useState } from 'react';
import { productsData } from './data/products';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterSort from './components/FilterSort';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './Styles/App.css';

export default function App() {
  // Core functional state orchestration hooks
  const [products] = useState(productsData);

  console.log(productsData,products)
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  // Add To Cart products
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove Cart
 
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //  Reset Filters

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('default');
  };

  //  Filter Category
  // const filteredAndSortedProducts = products
  //   .filter((product) => {
  //     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   })
  //   .sort((a, b) => {
  //     if (sortOrder === 'price-low-high') return a.price - b.price;
  //     if (sortOrder === 'price-high-low') return b.price - a.price;
  //     if (sortOrder === 'name-a-z') return a.name.localeCompare(b.name);
  //     if (sortOrder === 'name-z-a') return b.name.localeCompare(a.name);
  //     return 0;
  //   });
  const filteredAndSortedProducts = products
  .filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Convert both values to lowercase and trim spaces to ensure an exact textual match
    const matchesCategory = 
      selectedCategory === 'all' || 
      product.category?.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
      
    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    if (sortOrder === 'price-low-high') return a.price - b.price;
    if (sortOrder === 'price-high-low') return b.price - a.price;
    if (sortOrder === 'name-a-z') return a.name.localeCompare(b.name);
    if (sortOrder === 'name-z-a') return b.name.localeCompare(a.name);
    return 0;
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

 return (
  <div className="app-container">
    <Navbar cartCount={cartCount} />
    
    <main className="main-content">
     
      <div className="storefront-section"> 
        <div className="controls-panel">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterSort
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onReset={handleResetFilters}
          />
        </div>
        
        <ProductList 
          products={filteredAndSortedProducts} 
          onAddToCart={handleAddToCart} 
        />
      </div>

      <aside className="cart-sidebar">
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </aside>
    </main>
  </div>
);
}