import styles from './Cart.module.css'

function Cart({ cart, closeCart }) {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Carrinho de Compras</h2>
                {cart.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - R${item.value},90
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={closeCart}>Fechar</button>
            </div>
        </div>
    )
}

export default Cart