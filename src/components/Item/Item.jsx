import './Item.css'

export default function Item({ good, addToOrder }) {
    return (
        <div className="good">
            <img className="good__img" src={good.image} alt={good.category} />
            <p className="good__title"> {good.title}</p>
            <p className="good__desc">{good.description}</p>
            <p className="good__price">{good.price}$</p>
            <button className="good__addBtn" onClick={() => addToOrder(good)}>Buy</button>
        </div>
    )
}
