import React from 'react'
import styles from './FullCard.module.css'
import favorites from '../../assets/images/Favorites.svg'
import arrow from '../../assets/images/Arrow77.svg'
import idea from '../../assets/images/idea.svg'

const FullCard = ({ id, poster, title, alternativeName, genre, year, episodes, status, in_favorites, description }) => {
    return (
        <>
            <div className={styles.anime}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.card_img_block}>
                            <img className={styles.card_img} src={poster} alt="" />
                        </div>
                        <div className={styles.card_right}>
                            <div className={styles.card_right_top}>
                                <div className={styles.card_title}>
                                    <div className={styles.card_title_text}>
                                        {title}
                                    </div>
                                    <img src={idea} alt="" />
                                </div>
                                <div className={styles.alternative_name}>{alternativeName}</div>
                                <div className={styles.btns}>
                                    <div className={styles.btns_info}>
                                        <button className={styles.card_btn}>{year}</button>
                                        <button className={styles.card_btn}>{episodes}</button>
                                    </div>
                                    <button className={styles.Bookmarks}>
                                        <p>Не смотрю</p><img src={arrow} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.card_right_button}>
                                <div className={styles.card_right_info}><span>Статус: </span>{status}</div>
                                <div className={styles.card_right_info}><span>Жанр </span>{genre}</div>
                                <div className={styles.card_right_info}><span>Избранные: </span>{in_favorites} <img src={favorites} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.description}><span>Описание: </span>
                        {description}
                    </p>
                </div>


            </div>
        </>
    )
}

export default FullCard
