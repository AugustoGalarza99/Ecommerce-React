import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h1>Eccomerce</h1>
            <section>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar