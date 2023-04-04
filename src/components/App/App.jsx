import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartContainer from '../CartContainer/CartContainer';
import Navbar from '../Navbar/Navbar';
import { calculateTotals } from '../../redux/features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(calculateTotals());
    },
    [cartItems, dispatch],
  );

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
