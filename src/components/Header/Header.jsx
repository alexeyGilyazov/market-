import { FaCartShopping } from "react-icons/fa6";
import "./Header.css";
import { useState, useEffect } from "react";
import Order from "../Order/Order";

function Header({ order, deleteOrder }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [hasItems, setHasItems] = useState(order.length > 0);

  useEffect(() => {
    setHasItems(order.length > 0);
  }, [order]);

  const showOrders = () => {
    const sum = order
      .reduce((summa, current) => summa + +current.price * current.quantity, 0)
      .toFixed(2);
    return (
      <div>
        {order.map((orderGood) => (
          <Order
            key={orderGood.id}
            deleteOrder={deleteOrder}
            orderGood={orderGood}
          />
        ))}
        <p className="order__summ">Total: {sum} $</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <p>Your cart is empty...</p>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">Gi Market</span>
        <ul className="nav">
          <li>About</li>
          <li>Contact</li>
          <li>Cabinet</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen(!cartOpen)}
          className={`nav__cart ${hasItems ? "active" : ""}`}
        />
        <div className={`shop__cart ${cartOpen ? "visible" : "hidden"}`}>
          {order.length > 0 ? showOrders() : showNothing()}
        </div>
      </div>
      <div className="presentaion"></div>
    </header>
  );
}

export default Header;
