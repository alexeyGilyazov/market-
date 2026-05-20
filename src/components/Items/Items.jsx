import Item from "../Item/Item";
import "./Items.css";

export default function Items({ allGoods, addToOrder }) {
    return (
        <main>
            {allGoods.map((good) => (
                <Item key={good.id} good={good} addToOrder={addToOrder} />
            ))}
        </main>
    );
}
