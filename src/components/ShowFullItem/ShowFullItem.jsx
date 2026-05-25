import Modal from "react-modal";
import "./ShowFullItem.css";
import { FaSkullCrossbones } from "react-icons/fa6";

export default function ShowFullItem({ fullItem, onShowItem, addToOrder }) {
  if (!fullItem) return null; // Защита от undefined

  return (
    <Modal
      isOpen={!!fullItem}
      onRequestClose={() => onShowItem(null)}
      ariaHideApp={false}
    >
      <div className="full-item">
        <div className="show">
          <img
            onClick={() => onShowItem(null)}
            className="show__img"
            src={fullItem.image}
            alt={fullItem.category}
          />
          <p className="show__title"> {fullItem.title}</p>
          <p className="show__desc">{fullItem.description}</p>
          <p className="show__price">{fullItem.price}$</p>
          <button className="good__addBtn" onClick={() => addToOrder(fullItem)}>
            Buy
          </button>
          <FaSkullCrossbones
            className="close-modal"
            onClick={() => onShowItem(null)}
          />
        </div>
      </div>
    </Modal>
  );
}
