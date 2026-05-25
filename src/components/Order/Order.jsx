import "./Order.css";
import { FaTrash } from "react-icons/fa";

export default function Order({ orderGood, deleteOrder }) {
  return (
    <div className="order">
      <img
        className="good__img order__img"
        src={orderGood.image}
        alt={orderGood.category}
      />
      <div>
        <p className="good__title order__title">
          {orderGood.title}
          {orderGood.quantity > 1 && (
            <span className="quantity"> x {orderGood.quantity}</span>
          )}
        </p>
        <p className="good__price order__price">{orderGood.price}$</p>
        {/* Добавьте количество товара */}
        <p className="order__quantity">Quantity: {orderGood.quantity}</p>
      </div>
      <FaTrash
        onClick={() => deleteOrder(orderGood.id)}
        className="order__deleteBtn"
      />
      <p className="order__quantity">Количество: {orderGood.quantity}</p>
    </div>
  );
}
