import { Link } from "react-router-dom"
import './styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">
                <Link to={'/'}>E-commerce</Link>
            </h1>

            <nav className="navbar">
                <ul className="lista">
                    <li className="register_li">
                        <Link className='register_link' to={'/register'}>
                            <i className='bx bx-user'></i>
                        </Link>
                    </li>
                    <li className="login_li">
                        <Link className='login_link' to={'/login'}>
                            <i className='bx bx-box'></i>
                        </Link>
                    </li>
                    <li className="cart_li">
                        <Link className='cart_link' to={'/cart'}>
                            <i className='bx bx-cart'></i>
                        </Link>
                    </li>
                    <li className="cart_li">
                        <Link className='cart_link' to={'/purchases'}>
                            <i className='bx bx-align-justify'></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header