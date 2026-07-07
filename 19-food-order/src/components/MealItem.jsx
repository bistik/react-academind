import { useContext } from "react";
import Button from "./ui/Button";
import CartContext from "../store/CartContext";

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function MealItem({ mealId, image, name, price, description }) {
  const cartContext = useContext(CartContext);
  function handleAddToCart() {
    cartContext.addItem({ id: mealId, name, price });
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
