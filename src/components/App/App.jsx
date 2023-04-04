import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import Navbar from '../Navbar/Navbar';
import CartContainer from '../CartContainer/CartContainer';
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
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
