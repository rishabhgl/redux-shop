import ProductItem from './ProductItem';
import classes from './Products.module.css';

const bookList = [
  {
    id: 'b1',
    name: 'A Dance With Dragons',
    price: 20.00,
    author: 'George R. R. Martin'
  },
  {
    id: 'b2',
    name: 'Atomic Habits',
    price: 27.00,
    author: 'James Clear'
  },
  {
    id: 'b3',
    name: 'The Final Empire',
    price: 15.99,
    author: 'Brandon Sanderson'
  }
]

const mappedBooks = bookList.map(book => <ProductItem key = {book.id} name = {book.name} author = {book.author} price = {book.price} id = {book.id}/>)

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite books</h2>
      <ul>
        {mappedBooks}
      </ul>
    </section>
  );
};

export default Products;
