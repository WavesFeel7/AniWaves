import React from 'react'
import styles from './Card.module.css'
// import poster from '../../assets/images/peakpx.jpg'

const CardItem = ({ title, alternativeName, genre, year, episodes, status, description, poster }) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_img_block}>
                    <img className={styles.card_img} src={poster} alt="" />
                </div>
                <div className={styles.card_right}>
                    <div className={styles.card_title}>{title}</div>
                    <div className={styles.card_subtitle}>
                        <div className={styles.alternative_name}>{alternativeName}</div>
                        <div className={styles.Genre}>{genre}</div>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.card_btn}>{year}</button>
                        <button className={styles.card_btn}>{episodes}</button>
                    </div>
                    <div className={styles.card_status}>
                        <div className={styles.status_text}><span>Статус: </span>{status}</div>
                    </div>
                    <div className={styles.description} data-max-words="40">
                        <span>Описание: </span> {description}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardItem
