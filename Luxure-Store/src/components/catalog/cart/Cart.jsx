import styles from './Cart.module.css'

import { FaTrashAlt } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";

function Cart({ cart, closeCart, updateQuantity, removeToCart }) {

    const convertValue = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value)
    }

    const valueDiscount = (cart) => {
        let total = 0;
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (totalQuantity >= 2) {
            let firstApplied = false;

            cart.forEach((item) => {
                let itemValue = Number(item.value);
                let itemQuantity = Number(item.quantity);

                for (let i = 0; i < itemQuantity; i++) {
                    if (!firstApplied) {
                        total += itemValue;
                        firstApplied = true;
                    } else {
                        total += itemValue * 0.8;
                    }
                }
            });
        } else {
            total = cart.reduce((sum, item) => sum + item.value * item.quantity, 0);
        }
        return total;
    };


    const totalWithDiscount = valueDiscount(cart)


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
                                        <input type='number'
                                            className={styles.amount}
                                            value={item.quantity}
                                            min='1'
                                            onChange={(e) => updateQuantity(index, parseInt(e.target.value))} />
                                        <span className={styles.value}>{convertValue(item.value * item.quantity)}</span>
                                        <FaTrashAlt onClick={removeToCart} className={styles.trash} size='20' />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.buy}>
                    <div className={styles.final_value}>
                        {cart.length === 0 ? (
                            <p>Seu carrinho está vazio.</p>
                        ) : (
                            <div className={styles.values}>
                                <span className={styles.promotion}>
                                    Na compra de dois produtos, o segundo sai <span>20% mais barato</span>
                                </span>
                                <span className={styles.total}>
                                    <span className={styles.text_payable}>Valor total: <span className={styles.total_payable}>{convertValue(totalWithDiscount)}</span></span>
                                    {cart.length >= 2 || cart.some(item => item.quantity >= 2) ? (
                                        <span className={styles.discount}>Desconto de 20% adicionado</span>
                                    ) : ''}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={styles.actions_cart}>
                        <button onClick={closeCart}>Voltar</button>
                        {cart.length === 0 ? '' :
                            <button>Finalizar compra</button>}
                    </div>
                    <span className={styles.help}>A compra é finalizada com atendente<FaExclamation /></span>
                </div>
            </div>
        </div>
    )
}

export default Cart