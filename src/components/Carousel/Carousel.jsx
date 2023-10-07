import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import images from '../../assets/images/peakpx.jpg';

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
  };
    

    return (
        <div>
            <section className="carousel">
                <div className="container">
                    <div className="carousel-header">
                        <div className="title">
                            Ожидается <span>сегодня</span>
                        </div>
                        <a className="Schedule" href="#">
                            Расписание
                        </a>
                    </div>

                    <ul id="autoWidth" className="cs_hidden">
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="item_a">
                                <div className="box">
                                    <div className="slide-img">
                                        <img src={images} alt="" />
                                        <div className="overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Carousel
