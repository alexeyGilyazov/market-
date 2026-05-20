import { FaCartShopping } from "react-icons/fa6";
import './Header.css'
import { useState } from "react";

function Header() {
    const [cartOpen, setCartOpen] = useState(false)


    return (
        <header>
            <div>
                <span className='logo'>Gi Market</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cabinet</li>
                </ul>
                <FaCartShopping onClick={() => setCartOpen(!cartOpen)} className={`nav__cart ${cartOpen && 'active'}`} />
                {
                    cartOpen && (
                        <div className="shop__cart"></div>
                    )
                }
            </div>
            <div className="presentaion"></div>
        </header>
    )
}

export default Header