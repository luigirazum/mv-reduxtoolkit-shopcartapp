import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ChevronUp, ChevronDown } from '../icons/icons';
import { removeItem } from '../../redux/features/cart/cartSlice';

const CartItem = ({
  id, img, title, price, amount,
}) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        {/* remove button */}
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button type="button" className="amount-btn">
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button type="button" className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
