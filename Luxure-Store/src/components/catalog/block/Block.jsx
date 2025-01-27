import styles from './Block.module.css'

function Block({ name, value, promo, img }) {

    return (
        <div className={styles.content}>
            <img src={img} />
            <div className={styles.name_and_price}>
                <h3 className={styles.name_product}>
                    {name}
                </h3>
                <span className={styles.promotion}>
                    <p><span>de {promo},90</span> por:</p>
                </span>
                <span className={styles.price}>
                    R${value}<span>,90</span>
                </span>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    )
}

export default Block