import styles from './Catalog.module.css'

import Nav from './nav/Nav'
import Block from './block/Block'

import RelogioLuxure1 from '../../assets/img/RelógioLuxure1.png'
import RelogioLuxure2 from '../../assets/img/RelógioLuxure2.png'
import RelogioLuxure3 from '../../assets/img/RelógioLuxure3.png'
import RelogioLuxure4 from '../../assets/img/RelógioLuxure4.png'

function Catalog({ cart, addToCart }) {
    return (
        <section className={styles.container}>
            <div className={styles.blur_catalog}></div>
            <div className={styles.content}>
                <div className={styles.navigator_catalog}>
                    <Nav cart={cart} />
                </div>
                <div className={styles.poedegar_deluxe_session}>
                    <div className={styles.session_name}>
                        <h1>
                            Poedegar's Deluxes
                        </h1>
                    </div>
                    <div className={styles.watches_poedegar}>
                        <Block name='Poedegar Deluxe White' value='159.90' promo='259,90' img={RelogioLuxure1} addToCart={addToCart} />
                        <Block name='Poedegar Deluxe Black' value='159.90' promo='259,90' img={RelogioLuxure2} addToCart={addToCart} />
                        <Block name='Poedegar Deluxe Blue' value='159.90' promo='259,90' img={RelogioLuxure3} addToCart={addToCart} />
                        <Block name='Poedegar Deluxe Green' value='159.90' promo='259,90' img={RelogioLuxure4} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog