import { useDispatch } from "react-redux";
import "./Order.css";
import { FaTrash } from "react-icons/fa";
import { incrementQuantity, decrementQuantity } from "../../Store/cartSlice";

export default function Order({ orderGood, deleteOrder }) {
  const dispatch = useDispatch();

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
        <div className="order__quantity-controls">
          <button onClick={() => dispatch(decrementQuantity(orderGood.id))}>
            -
          </button>
          <span>{orderGood.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(orderGood.id))}>
            +
          </button>
        </div>
      </div>
      <FaTrash
        onClick={() => deleteOrder(orderGood.id)}
        className="order__deleteBtn"
      />
    </div>
  );
}
