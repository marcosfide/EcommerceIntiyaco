import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
        <h3>Ecommerce</h3>
            <div>
                <button>Boton1</button>
                <button>Boton2</button>
                <button>Boton3</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar