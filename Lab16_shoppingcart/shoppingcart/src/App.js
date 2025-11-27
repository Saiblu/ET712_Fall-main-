import './App.css';
import React, {useState} from 'react';
import ProductList from './components/Product';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([])

  /**find if the product is already in the cart */
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id)
    /** if exist, exist == True, increase the quantity*/
    if (exist) {
      setCart(
        cart.map((item) => {
          if(item.id === product.id)
            return {...item, qty: item.qty + 1}
          else 
            return item
        })
      )
    }
    /** if not exist, add the product to cart with quantity 1 */
    else {
      setCart([...cart, {...product, qty: 1}])
    }
  }
  
   /** Remove function*/
   const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
   }

  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Elias's supermarket</h1>
      
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />

    </div>
  );
}

export default App;
