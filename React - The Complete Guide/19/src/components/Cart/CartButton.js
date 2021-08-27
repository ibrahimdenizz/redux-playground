import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector((state) => state.cart.cartItems.length);
  const isShowCart = useSelector((state) => state.cart.showCart);

  function showCart() {
    if (!isShowCart) dispatch(cartActions.showCart());
    else dispatch(cartActions.hideCart());
  }

  return (
    <button className={classes.button} onClick={showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
