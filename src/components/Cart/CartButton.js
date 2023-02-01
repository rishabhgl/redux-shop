import { useDispatch, useSelector } from 'react-redux/es/exports';
import cartActions from '../../store/cartSlice';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const books = useSelector(store => store.items);

  const amount = books.reduce((curNum,book) => {
    return book.amount + curNum;
  }, 0);
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick = {toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
