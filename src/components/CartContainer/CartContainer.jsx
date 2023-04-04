import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {
        // eslint-disable-next-line react/jsx-props-no-spreading
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
        }
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total}
            </span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
