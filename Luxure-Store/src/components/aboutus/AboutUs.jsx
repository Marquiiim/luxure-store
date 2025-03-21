import styles from './AboutUs.module.css'

import RelogioTop from '../../assets/img/RelógioLuxure1.png'
import RelogioBottom from '../../assets/img/RelógioLuxure2.png'

import { Link } from 'react-router-dom'


function AboutUs() {

    return (
        <section className={styles.container}>
            <div className={styles.blur_aboutus}></div>
            <div className={styles.content}>
                <ul>
                    <li>
                        <Link to="/" >
                            Inicio
                        </Link>
                    </li>
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
                <div className={styles.top_info}>
                    <div className={styles.text_left}>
                        <p>
                            Buscando um toque de sofisticação para o seu dia a dia? Na <span>Luxure</span>, dois amigos apaixonados por relógios se uniram para criar uma experiência de compra única e exclusiva. Nossos relógios são mais do que acessórios, são peças que elevam o seu estilo e te acompanham em todos os momentos. Venha conhecer nossa coleção e descubra a peça perfeita para você!
                        </p>
                    </div>
                    <img src={RelogioTop} />
                </div>

                <div className={styles.bottom_info}>
                    <img src={RelogioBottom} />
                    <div className={styles.text_right}>
                        <p>
                            A <span>Luxure</span> é mais do que uma loja de relógios. Somos um lifestyle que celebra a elegância e a individualidade. Cada relógio da nossa coleção é cuidadosamente escolhido para atender aos mais altos padrões de qualidade e design. Ao adquirir um relógio conosco, você faz parte de um grupo de pessoas que valorizam o bom gosto e a autenticidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs