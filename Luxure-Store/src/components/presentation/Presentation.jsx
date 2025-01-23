import styles from './Presentation.module.css'

import Luxure from '../../assets/img/LuxureLogo.png'

function Presentation() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <img src={Luxure} alt='Luxure' />
                <p>Tradução de elegância e qualidade.</p>
            </div>
        </section>
    )
}

export default Presentation