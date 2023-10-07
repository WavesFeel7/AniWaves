import React from 'react'

import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

import Logo from '../../assets/images/Logo.svg';
import arrow from '../../assets/images/Arrow.svg'
import telegram from '../../assets/images/Telegram.svg'

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer__inner}>
                        <Link to="#" className={styles.Logo}>
                            <img src={Logo} alt="AniWaves" />
                        </Link>
                        <nav className={styles.footer_nav}>
                            <img className={styles.social} src={arrow} alt="" />
                            <img className={styles.arrow} src={telegram} alt="" />
                        </nav>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
