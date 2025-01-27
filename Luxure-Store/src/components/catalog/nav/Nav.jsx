import styles from './Nav.module.css'

import { TiShoppingCart } from "react-icons/ti";

function Nav() {

    return (
        <nav>
            <h1>Catálogo</h1>
            <div>
                <span>Carrinho <TiShoppingCart /></span>
            </div>
        </nav>
    )
}

export default Nav