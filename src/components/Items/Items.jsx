import Item from "../Item/Item";
import "./Items.css";

export default function Items({ allGoods, addToOrder, onShowItem }) {
  return (
    <main>
      {allGoods.map((good) => (
        <Item
          key={good.id}
          good={good}
          addToOrder={addToOrder}
          onShowItem={onShowItem}
        />
      ))}
    </main>
  );
}
