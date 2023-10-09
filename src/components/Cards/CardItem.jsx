import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
// import poster from '../../assets/images/peakpx.jpg'

const CardItem = ({ id, title, alternativeName, genre, year, episodes, status, description, poster }) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_img_block}>
                    <Link className={styles.poster_link} to={`/anime/${id}`}>
                        <img className={styles.card_img} src={poster} alt="" />
                    </Link>

                </div>
                <div className={styles.card_right}>
                    <Link to={`/anime/${id}`}>
                        <div className={styles.card_title}>{title}</div>
                        <div className={styles.card_subtitle}>
                            <div className={styles.alternative_name}>{alternativeName}</div>
                            <div className={styles.Genre}>{genre}</div>
                        </div>
                    </Link>
                    <div className={styles.btns}>
                        <button className={styles.card_btn}>{year}</button>
                        <button className={styles.card_btn}>
                            {episodes == null ? "Серий еще нет" : `${episodes} серий`}
                        </button>

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
