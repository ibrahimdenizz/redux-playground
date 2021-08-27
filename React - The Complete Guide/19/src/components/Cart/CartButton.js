import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector(
    (state) => state.cart.totalItemQuantity
  );

  function toggleCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
