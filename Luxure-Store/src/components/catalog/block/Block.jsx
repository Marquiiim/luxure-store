import styles from './Block.module.css'

function Block({ name, value, promo, img, addToCart }) {
    const handleAddToCar = () => {
        const item = { name, value, promo, img }
        addToCart(item)
    }

    const convertValue = (value) => {
        return value.toString().replace(".", ",")
    }

    return (
        <div className={styles.content}>
            <img src={img} />
            <div className={styles.name_and_price}>
                <h3 className={styles.name_product}>
                    {name}
                </h3>
                <span className={styles.promotion}>
                    <p><span>de {promo}</span> por:</p>
                </span>
                <span className={styles.price}>
                    R${convertValue(value)}
                </span>
            </div>
            <button onClick={handleAddToCar}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Block