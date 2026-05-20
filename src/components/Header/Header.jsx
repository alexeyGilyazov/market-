import './Header.css'

function Header() {
    return (
        <header>
            <div>
                <span className='logo'>Gi Market</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cabinet</li>
                </ul>
            </div>
            <div className="presentaion"></div>
        </header>
    )
}

export default Header