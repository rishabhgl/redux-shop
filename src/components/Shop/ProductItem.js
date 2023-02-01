import { useDispatch } from 'react-redux/es/exports';
import cartActions from '../../store/cartSlice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const dispatch  = useDispatch();
  const { id, name, price, author } = props;

  const addToCartHandler = () => {
    const book = {
      id, name, price
    }
    dispatch(cartActions.addItem(book));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{author}</p>
        <div className={classes.actions}>
          <button onClick = {addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
