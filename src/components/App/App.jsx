import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import Navbar from '../Navbar/Navbar';
import CartContainer from '../CartContainer/CartContainer';
import { calculateTotals, getCartItems } from '../../redux/features/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(calculateTotals());
    },
    [cartItems, dispatch],
  );

  useEffect(
    () => {
      dispatch(getCartItems());
    },
    [dispatch],
  );

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
