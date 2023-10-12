import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';
import Hls from 'hls.js';
import hamburger from '../../assets/images/Hamburger.svg';

const ReactVideoPlayer_V2 = ({ seriesData }) => {
    const videoRef = useRef(null);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const initialSeries = Object.values(seriesData)[0];
        setSelectedSeries(initialSeries);

        if (initialSeries && initialSeries.hls && initialSeries.hls.hd) {
            const videoElement = videoRef.current;
            const videoUrl = `https://cache.libria.fun${initialSeries.hls.hd}`;
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (!playing) {
                    videoElement.play().catch(error => {
                        console.error('Play error:', error);
                    });
                }
            });
        }
    }, [seriesData, playing]);

    const handleSeriesClick = (series) => {
        setSelectedSeries(series);

        if (series.hls && series.hls.hd) {
            const videoElement = videoRef.current;
            const videoUrl = `https://cache.libria.fun${series.hls.hd}`;
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (!playing) {
                    videoElement.play().catch(error => {
                        console.error('Play error:', error);
                    });
                }
            });
        }
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const enableVideoControls = () => {
        const videoElement = videoRef.current;
        videoElement.setAttribute('controls', 'true');
        setPlaying(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.video_container}>
                <video ref={videoRef} onCanPlay={enableVideoControls} autoPlay={false} controls={false} />
                <img
                    className={`${styles.Hamburger} ${isMenuVisible ? styles.active : ''}`}
                    src={hamburger}
                    alt=""
                    onClick={toggleMenu}
                />
                <div className={`${styles.scroll_container} ${isMenuVisible ? styles.visible : ''}`}>
                    <ul className={styles.series_list}>
                        {Object.values(seriesData).map((series) => (
                            <li
                                key={series.episode}
                                className={`series ${selectedSeries === series ? styles.selected : ''}`}
                                onClick={() => handleSeriesClick(series)}
                            >
                                {`${series.episode} серия`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReactVideoPlayer_V2;
