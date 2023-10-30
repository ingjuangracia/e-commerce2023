import { Link } from "react-router-dom"
import './styles/header.css'

const Header = () => {

    return (
        <header className="header">
            <h1 className="header__logo">
                <Link to='/' className="no-decoration">e-commerce</Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to='/login'><i className='bx bx-user' title='Login'></i></Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/cart'><i className='bx bx-cart' title='Cart'></i></Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/purchases'><i className='bx bx-box' title='Purchases'></i></Link>
                    </li>
                </ul>
            </nav>


        </header>

    )
}

export default Header