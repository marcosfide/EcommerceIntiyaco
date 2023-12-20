import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
        <h3>Productos Cabañas Intiyaco</h3>
            <div>
                <button>Remera</button>
                <button>Taza</button>
                <button>Llavero</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar