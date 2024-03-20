import { CartProvider } from 'react-use-cart';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
    return (
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    );
  }

export default App;
