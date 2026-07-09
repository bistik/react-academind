import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  function handleIncrementItem(itemId) {
    dispatch(cartActions.incrementQuantity(itemId));
  }

  function handleDecrementItem(itemId) {
    dispatch(cartActions.decrementQuantity(itemId));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>
          {title} - {id}
        </h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecrementItem(id)}>-</button>
          <button onClick={() => handleIncrementItem(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
