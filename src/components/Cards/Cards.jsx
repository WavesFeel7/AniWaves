import React, { useState, useRef } from 'react';
import styles from './Card.module.css';
import CardItem from './CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/slices/cards';

const Card = () => {
    const dispatch = useDispatch();
    const { cards } = useSelector((state) => state.cards);
    const [limit, setLimit] = useState(5);
    const scrollPositionRef = useRef(0); // Ссылка на реф для хранения позиции скролла

    React.useEffect(() => {
        // Передаем лимит и текущую позицию скролла в fetchCards
        dispatch(fetchCards(limit, scrollPositionRef.current));
    }, [dispatch, limit]);

    const loadMoreCards = () => {
        // Сохраняем текущую позицию скролла
        scrollPositionRef.current = window.scrollY;
        setLimit(limit + 10);
    };

    React.useEffect(() => {
        // После загрузки новых карточек восстанавливаем позицию скролла
        window.scrollTo(0, scrollPositionRef.current);
    }, [cards]);

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
                        <p className={styles.loading}>Loading...</p>
                    )}



                    <button type="button" className={styles.button} onClick={loadMoreCards}>
                        Показать больше
                    </button>


                </div>
            </section >
        </div >
    )
}

export default Card
