import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Github from '../../assets/images/GitHub.svg'
import home_img from '../../assets/images/home_images.png'
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <section className={styles.Home}>
                <div className={styles.container}>
                    <div className={styles.Home__inner}>
                        <div className={styles.Home_left}>
                            <Link to="#">
                                <img className={styles.logo_title} src={Logo} alt="AniWaves" />
                            </Link>
                            <p className={styles.subtitle}>Смотрите аниме <span>без рекламы</span> <br /> и <span>с хорошей озвучкой</span></p>
                            <button className={styles.btn}>
                                <p>Get Api Anilibria</p><img src={Github} alt='Github' />
                            </button>
                        </div>
                        <img className={styles.home_img} src={home_img} alt="home_img" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome
