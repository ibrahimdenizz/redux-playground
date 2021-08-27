import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ id, title, quantity, price }) => (
          <CartItem
            item={{ id, title, quantity, price, total: price * quantity }}
            key={id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
