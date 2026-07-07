import currencyFormatter from "../util/formatter";

export default function CartItem({
  itemId,
  name,
  quantity,
  price,
  onAdd,
  onRemove,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => onRemove(itemId)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onAdd({ id: itemId, name, price })}>+</button>
      </p>
    </li>
  );
}
