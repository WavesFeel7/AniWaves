import React, { Component } from 'react';
import 'react-html5video/dist/styles.css';
import styles from './VideoPlayer.module.css';
import hamburger from '../../assets/images/Hamburger.svg';

class ReactVideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeriesIndex: 0, // Индекс выбранной серии
            isScrollContainerVisible: false, // Состояние видимости контейнера
        };
        this.videoRef = React.createRef();
    }

    handleSeriesClick = (index) => {
        this.setState({ selectedSeriesIndex: index });
        this.loadVideo(index); // Загружаем видео при выборе серии
    };

    handleHamburgerClick = () => {
        this.setState((prevState) => ({
            isScrollContainerVisible: !prevState.isScrollContainerVisible,
        }));
    };

    // Функция для загрузки видео
    loadVideo = (index) => {
        const { seriesData } = this.props;
        const seriesArray = Object.values(seriesData);

        if (seriesArray[index] && seriesArray[index].hls) {
            // Проверяем, есть ли HLS источник для выбранной серии
            const videoSource = seriesArray[index].hls.fhd;
            if (this.videoRef.current) {
                this.videoRef.current.src = videoSource;
                this.videoRef.current.load();
                this.videoRef.current.play();
            }
        }
    };

    renderSeriesList() {
        const { selectedSeriesIndex } = this.state;
        const { seriesData } = this.props;
        const seriesArray = Object.values(seriesData);

        return (
            <ul className={styles.series_list}>
                {seriesArray.map((series, index) => (
                    <li
                        key={index}
                        className={`${styles.series} ${selectedSeriesIndex === index
                            ? styles.selected
                            : ''
                            }`}
                        onClick={() => this.handleSeriesClick(index)}
                    >
                        Серия {series.episode}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { isScrollContainerVisible } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.videoContainer}>
                    <video ref={this.videoRef} controls>
                        <source src="https://cache.libria.fun/videos/media/ts/9284/3/720/4cc228b26307888f9cb0091ff233a6e3.m3u8" type='video/mp4' />
                    </video>

                    <img
                        className={styles.Hamburger}
                        src={hamburger}
                        alt=""
                        onClick={this.handleHamburgerClick}
                    />
                    <div
                        className={`${styles.scroll_container} ${isScrollContainerVisible
                            ? styles.visible
                            : ''
                            }`}
                    >
                        {this.renderSeriesList()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactVideoPlayer;
