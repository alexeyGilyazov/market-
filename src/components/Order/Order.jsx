import './Order.css'
import { FaTrash } from 'react-icons/fa'

export default function Order({ orderGood, deleteOrder }) {
    return (
        <div className="order">
            <img className="good__img order__img" src={orderGood.image} alt={orderGood.category} />
            <p className="good__title order__title">{orderGood.title}</p>
            <p className="good__price order__price">{orderGood.price}$</p>
            <FaTrash onClick={() => deleteOrder(orderGood.id)} className='order__deleteBtn' />
        </div>
    )
}
