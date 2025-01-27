import styles from './Nav.module.css'

import { TiShoppingCart } from "react-icons/ti";

function Nav({ cart, openCart }) {
    return (
        <nav>
            <div className={styles.title_nav}>
                <h1>Catálogo</h1>
            </div>
            <div className={styles.cart}>
                <span onClick={openCart}>Carrinho ({cart ? cart.length : 0}) <TiShoppingCart /></span>
            </div>
        </nav>
    )
}

export default Nav