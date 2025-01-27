import styles from './Catalog.module.css'

import Nav from './nav/Nav'
import Block from './block/Block'

import RelogioLuxure1 from '../../assets/img/RelógioLuxure1.png'
import RelogioLuxure2 from '../../assets/img/RelógioLuxure2.png'
import RelogioLuxure3 from '../../assets/img/RelógioLuxure3.png'

function Catalog() {

    return (
        <section className={styles.container}>
            <div className={styles.blur_catalog}></div>
            <div className={styles.content}>
                <div className={styles.navigator_catalog}>
                    <Nav />
                </div>
                <div className={styles.poedegar_deluxe_session}>
                    <Block name='Poedegar Deluxe White' value='159' promo='259' img={RelogioLuxure1} />
                    <Block name='Poedegar Deluxe Black' value='159' promo='259' img={RelogioLuxure2} />
                    <Block name='Poedegar Deluxe Blue' value='159' promo='259' img={RelogioLuxure3} />
                </div>
            </div>
        </section>
    )
}

export default Catalog