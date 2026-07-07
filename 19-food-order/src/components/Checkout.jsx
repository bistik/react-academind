import { useContext, useActionState } from "react";
import CartContext from "../store/CartContext";
import Input from "./ui/Input";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig,
  );

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  async function checkoutAction(state, fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    );
  }

  const [formState, formAction, isPending] = useActionState(
    checkoutAction,
    null,
  );

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isPending) {
    actions = <>Sending order...</>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Successful order</h2>
        <p>Your order was submitted successfully</p>
        <p>We will get back to you in a few minutes</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Ok</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount:</p>
        <Input id="name" type="text" label="Full Name" name="name" />
        <Input id="email" type="email" label="Email" name="email" />
        <Input id="street" type="text" label="Street" name="street" />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
