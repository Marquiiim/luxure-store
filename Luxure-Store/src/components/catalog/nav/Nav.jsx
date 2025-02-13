import styles from './Nav.module.css';

import { TiShoppingCart } from "react-icons/ti";

import { Link } from 'react-router-dom';

function Nav({ cart, openCart }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/sobrenos" >
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo" >
                        Catálogo
                    </Link>
                </li>
            </ul>

            <div className={styles.catalog_options}>
                <h1>Catálogo</h1>
                <Link to="/carrinho">
                    Carrinho ({cart ? cart.length : 0}) <TiShoppingCart />
                </Link>
            </div>
        </nav>
    )
}

export default Nav