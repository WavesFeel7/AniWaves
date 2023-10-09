import React from 'react'
import styles from './Banner.module.css'
import bannerImg from '../../assets/images/bg1920_1080_night.png'

const Banner = () => {
    return (
        <>
            <img className={styles.bg} src={bannerImg} alt="" />
        </>
    )
}

export default Banner
