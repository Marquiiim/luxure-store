import styles from './Cart.module.css'

import { FaTrashAlt } from "react-icons/fa";

function Cart({ cart, closeCart }) {

    return (
        <div className={styles.modal}>
            <h2>Carrinho de Compras</h2>
            <div className={styles.modal_content}>
                <div className={styles.products}>
                    {cart.length === 0 ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        <ul className={styles.list_products}>
                            <ul className={styles.info_list}>
                                <li>
                                    Produto
                                </li>
                                <li>
                                    Quantidade
                                </li>
                                <li>
                                    Valor
                                </li>
                            </ul>
                            {cart.map((item, index) => (
                                <li className={styles.product} key={index}>
                                    <img src={item.img} />
                                    <div className={styles.characteristics}>
                                        <span className={styles.name}>{item.name}</span>
                                        <input type='number' className={styles.amount} defaultValue='1' />
                                        <span className={styles.value}>R${item.value},90</span>
                                        <FaTrashAlt className={styles.trash} size='20' />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.buy}>
                    <div className={styles.actions_cart}>
                        <button onClick={closeCart}>Voltar</button>
                        {cart.length === 0 ? '' :
                            <button>Finalizar compra</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart