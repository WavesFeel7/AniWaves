import React from 'react'
import styles from './Card.module.css'
import poster from '../../assets/images/peakpx.jpg'
import CardItem from './CardItem'

const Card = () => {
    return (
        <div>
            <section className={styles.cards}>
                <div className={styles.container}>
                    <div className={styles.title}>Все <span>новые</span> тайтлы</div>


                    {[...Array(3)].map(() => (
                        <CardItem
                            id={1}
                            title="Рон Камонохаши: Невменяемый детектив"
                            alternativeName="Ao no Orchestra"
                            genre="Драма | Музыка | Школа"
                            year="2023"
                            episodes="12 из 24 эп"
                            status=" в работе"
                            description="Начало девяностых, расцвет шестнадцатибитных игр. Молодая девушка Мэйко Уэхара, едва поступив в университет, решает устроиться на работу в простой с первого взгляда компьютерный магазинчик. Однако, проработав там совсем немного, она выясняет страшную правду: на самом деле, этот магазин — компания по разработке игр, да не простых, а эротических! Теперь Мэйко предстоит стать графическим дизайнером одной из таких игр. И, хоть талантом художника она не обделена, но рисовать восемнадцать плюс контент ей раньше не доводилось. Хотя такая ерунда не остановит девушку! Поборов своё смущение и познав премудрости компьютерной графики девяностых, она отправляется покорять мир шестнадцатибитных игр для взрослых!"
                        />
                    ))}

                    <button className={styles.button}>
                        Показать больше
                    </button>

                </div>
            </section >
        </div >
    )
}

export default Card
