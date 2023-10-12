import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSchedule } from '../../redux/slices/schedule';
import { format, getDay, addHours } from 'date-fns';


const Slider = ({ id }) => {
    const dispatch = useDispatch();
    const { schedule } = useSelector((state) => state.schedule);

    React.useEffect(() => {
        dispatch(fetchSchedule());
    }, []);


    function getDayOfWeek(date) {
        return (date.getDay() + 6) % 7;
    }

    function getCurrentTimeInMoscow() {
        const moscowTimezoneOffset = 3; // UTC+3 for Moscow Time
        const currentDate = new Date();
        return addHours(currentDate, moscowTimezoneOffset);
    }


    const currentMoscowTime = getCurrentTimeInMoscow();
    const dayOfWeek = getDayOfWeek(currentMoscowTime);


    const todaySchedule = schedule.items.find((item) => item.day === dayOfWeek);
    const animeList = todaySchedule ? todaySchedule.list : [];


    console.log(dayOfWeek)





    // slider

    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        sliderRef.current = document.getElementById('slider');
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
        sliderRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        sliderRef.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        sliderRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walkX = (x - startX) * 1;
        sliderRef.current.scrollLeft = scrollLeft - walkX;
    };

    const scrollLeftButton = () => {
        sliderRef.current.scrollBy({
            top: 0,
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRightButton = () => {
        sliderRef.current.scrollBy({
            top: 0,
            left: 200,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="slider_container">
                <div className="carousel_header">
                    <div className="title">
                        Ожидается <span>сегодня</span>
                    </div>
                    <a className="Schedule" href="#">
                        Расписание
                    </a>
                </div>
                <div className="action-buttons">
                    <button onClick={scrollLeftButton} type="button" id="action-button--previous" className="action-button--horizontal-scroll">
                        <svg width="16" height="16" fill="fff" focusable="false" viewBox="0 0 24 24">
                            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
                        </svg>
                    </button>
                    <button onClick={scrollRightButton} type="button" id="action-button--next" className="action-button--horizontal-scroll">
                        <svg width="16" height="16" fill="fff" focusable="false" viewBox="0 0 24 24">
                            <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
                        </svg>
                    </button>
                </div>

                <div id="slider" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                    {animeList.map((anime) => (
                        <div className='slider_inner' key={anime.id}>
                            <Link key={anime.id} to={`/anime/${anime.id}`} className="slider_content">
                                <img className="slider_img" aria-hidden="true" src={`https://anilibria.tv${anime.posters.small.url}`} alt={anime.names.ru} />
                            </Link>
                            <p className="slider_title">{anime.names.ru}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slider;
