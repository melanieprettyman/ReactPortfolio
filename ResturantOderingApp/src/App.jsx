/////////////////////////////////////////////////////////
// Created by Melanie Prettyman
//
// In terminal run 'npm run dev' to launch FE
// In another terminal cd into BE and run 'npm start'
//
/////////////////////////////////////////////////////////






import Header from './components/Header.jsx';
import Meals from './components/Meals/Meals.jsx';
import {CartContextProvider} from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;