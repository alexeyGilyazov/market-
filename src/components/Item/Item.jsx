import { motion } from "framer-motion";

import "./Item.css";

export default function Item({ good, addToOrder, onShowItem }) {
  return (
    <motion.div
      className="good"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        rotate: 0.5,
      }}
    >
      <img
        onClick={() => onShowItem(good)}
        className="good__img"
        src={good.image}
        alt={good.category}
      />
      <p className="good__title"> {good.title}</p>
      <p className="good__desc">{good.description}</p>
      <p className="good__price">{good.price}$</p>
      <button className="good__addBtn" onClick={() => addToOrder(good)}>
        Buy
      </button>
    </motion.div>
  );
}
