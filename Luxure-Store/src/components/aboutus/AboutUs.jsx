import styles from './AboutUs.module.css'

import RelogioTop from '../../assets/img/RelógioLuxure1.png'
import RelogioBottom from '../../assets/img/RelógioLuxure2.png'


function AboutUs() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.division}></div>
                <h1>
                    Quem somos nós?
                </h1>
                <div className={styles.top_info}>
                    <div className={styles.text_left}>
                        <p>
                            Buscando um toque de sofisticação para o seu dia a dia? Na Luxure, dois amigos apaixonados por relógios se uniram para criar uma experiência de compra única e exclusiva. Nossos relógios são mais do que acessórios, são peças que elevam o seu estilo e te acompanham em todos os momentos. Venha conhecer nossa coleção e descubra a peça perfeita para você!
                        </p>
                    </div>
                    <img src={RelogioTop} />
                </div>

                

                <div className={styles.bottom_info}>
                    <img src={RelogioBottom} />
                    <div className={styles.text_right}>
                        <p>
                            A Luxure é mais do que uma loja de relógios. Somos um lifestyle que celebra a elegância e a individualidade. Cada relógio da nossa coleção é cuidadosamente escolhido para atender aos mais altos padrões de qualidade e design. Ao adquirir um relógio conosco, você faz parte de um grupo de pessoas que valorizam o bom gosto e a autenticidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs