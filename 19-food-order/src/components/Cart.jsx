import { useContext } from "react";
import Modal from "./ui/Modal";
import CartContext from "../store/CartContext";
import Button from "./ui/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleAddItem(item) {
    cartCtx.addItem(item);
  }

  function handleRemoveItem(id) {
    cartCtx.removeItem(id);
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            itemId={item.id}
            {...item}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
            onAdd={handleAddItem}
          />
        ))}
      </ul>
      <p className="cart-total">{formatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
}
