import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import logoIntiayco from "./assets/logo-intiyaco-white.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <img src={logoIntiayco} alt="cart" className='LogoIntiyaco' /> 
            </Link>
            <div className="Categories">
                <NavLink to={`/category/remera`} className={'Option'}>Remeras</NavLink>
                <NavLink to={`/category/taza`} className={'Option'}>Tazas</NavLink>
                <NavLink to={`/category/llavero`} className={'Option'}>Llaveros</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar