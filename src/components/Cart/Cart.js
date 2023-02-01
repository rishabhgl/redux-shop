import { useSelector } from 'react-redux/es/exports';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartBooks = useSelector(store => store.items);

  const mappedCartBooks = cartBooks.map(book => <CartItem item={{ title: book.name , quantity: book.amount, total: book.amount * book.price, price: book.price, id: book.id }} key ={book.id}/>);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {mappedCartBooks}
      </ul>
    </Card>
  );
};

export default Cart;
