import styles from './Presentation.module.css'

import Luxure from '../../assets/img/LuxureLogo.png'

import { Link } from 'react-router-dom'

function Presentation() {

    return (
        <section className={styles.container}>
            <div className={styles.blur}></div>
            <div className={styles.content}>
                <img className={styles.logo_luxure} src={Luxure} alt='Luxure Logo' />
                <p className={styles.saying_luxure} >Tradução de elegância e qualidade.</p>
                <ul>
                    <li>
                        <Link to="/sobrenos" >
                            Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalogo" >
                            Catálogo
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Presentation