import React from 'react'
import styles from './Card.module.css'
// import axios from '../../axios.js'
import CardItem from './CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/slices/cards'

const Card = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCards());
    }, [])

    const { cards } = useSelector((state) => state.cards)
    console.log(cards.items.list)

    return (
        <div>
            <section className={styles.cards}>
                <div className={styles.container}>
                    <div className={styles.title}>Все <span>новые</span> тайтлы</div>

                    {cards.items.list && cards.items.list.length > 0 ? (
                        cards.items.list.map((obj) => {
                            const fullPosterURL = `https://anilibria.tv${obj.posters.original.url}`;
                            console.log(fullPosterURL); // Вывод полного URL-адреса изображения в консоль
                            return (
                                <CardItem
                                    key={obj.id}
                                    id={obj.id}
                                    poster={fullPosterURL} // Используйте полный URL-адрес изображения
                                    title={obj.names.ru || obj.names.en}
                                    alternativeName={obj.names.en}
                                    genre={obj.genres.join(' | ')}
                                    year={obj.season.year}
                                    episodes={obj.type.full_string}
                                    status={obj.status.string}
                                    description={obj.description}
                                />
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}



                    <button className={styles.button}>
                        Показать больше
                    </button>

                </div>
            </section >
        </div >
    )
}

export default Card
