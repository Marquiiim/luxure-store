import styles from './Presentation.module.css'

import Luxure from '../../assets/img/LuxureLogo.png'

import { Link } from 'react-router-dom'

function Presentation() {

    return (
        <section className={styles.container}>
            <div className={styles.blur}></div>
            <div className={styles.content}>
                <div className={styles.section_one}>
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

                <div className={styles.presentation_luxure}>
                    <h1 className={styles.title}>Eleve seu estilo com relógios que contam mais que as horas</h1>

                    <p className={styles.sub_title}>Você já imaginou como um único acessório pode transformar completamente o seu visual? Na Luxure, oferecemos relógios que não apenas marcam o tempo, mas também definem o seu estilo e personalidade.</p>

                    <div className={styles.highlight}>
                        <h1>Por que escolher nossos relógios?</h1>
                        <ul>
                            <li>Design Elegante e Atemporal: Cada peça é cuidadosamente selecionada para combinar com qualquer ocasião, seja um evento formal ou um encontro casual.</li>
                            <li>Qualidade Incomparável: Fabricados com os melhores materiais, nossos relógios são duráveis, precisos e feitos para durar.</li>
                            <li>Preços Acessíveis: Elegância não precisa custar uma fortuna. Oferecemos opções que cabem no seu bolso sem comprometer a qualidade.</li>
                            <li>Presente Perfeito: Surpreenda alguém especial com um presente que será lembrado para sempre.</li>
                        </ul>
                    </div>

                    <div className={styles.cta}>
                        <p>Não perca tempo! Aproveite nossa promoção exclusiva por tempo limitado e ganhe frete grátis em todas as compras acima de R$ 159,00.</p>

                        <p className={styles.tip}>Não espere mais para elevar o seu estilo. Compre agora e experimente a diferença que um relógio elegante pode fazer!</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Presentation