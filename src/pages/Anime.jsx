import React, { useState } from 'react'
import Banner from '../components/Banner/Banner'
import FullCard from '../components/FullCard/FullCard'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import ReactVideoPlayer from '../components/VideoPlayer/ReactVideoPlayer'
import ReactVideoPlayer_V2 from '../components/VideoPlayer/ReactVideoPlayer_V2'

const Anime = () => {
    const [data, setData] = useState(null)
    const [series, setSeries] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();


    React.useEffect(() => {
        axios.get(`/title?id=${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.warn(err);
                alert('Ошибка при получении тайтла');
            });
    }, [id]);


    if (isLoading) {
        return <h3>Loading</h3>
    }

    const fullPosterURL = `https://anilibria.tv${data.posters.original.url}`;
    const seriesData = data.player.list;
    // console.log(seriesData)
    console.log('Player: ', seriesData)
    return (
        <>
            <Banner />
            <FullCard
                key={data.id}
                id={data.id}
                poster={fullPosterURL} // Используйте полный URL-адрес изображения
                title={data.names.ru || data.names.en}
                alternativeName={data.names.en}
                genre={data.genres.join(' | ')}
                year={data.season.year}
                episodes={data.type.episodes}
                status={data.status.string}
                description={data.description}
                in_favorites={data.in_favorites}
            />
            {/* <ReactVideoPlayer seriesData={seriesData} /> */}
            <ReactVideoPlayer_V2 seriesData={seriesData} />
        </>
    )
}

export default Anime
