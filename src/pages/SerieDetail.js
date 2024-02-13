import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import VideoSection from "../components/VideoSection";
import * as PropTypes from "prop-types";
import {SerieDetailCard} from "../components/SerieDetailCard";

const SerieDetail = () => {
    const [serieDetails, setSerieDetails] = useState({});
    const [videoKey, setVideoKey] = useState("");
    const {
        name,
        poster_path,
        overview,
        vote_average,
        vote_count,
    } = serieDetails;
    const {id} = useParams();
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const serieDetailBaseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
    const videoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`;
    const baseImageUrl = "https://www.themoviedb.org/t/p/w1280/";
    const defaultImage =
        "https://www.themoviedb.org/t/p/w1280/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg";

    useEffect(() => {
        axios
            .get(serieDetailBaseUrl)
            .then((res) => setSerieDetails(res.data))
            .catch((err) => console.log(err));

        axios
            .get(videoUrl)
            .then((res) => {
                const key = res.data.results[0]?.key;
                setVideoKey(key);
            })
            .catch((err) => console.log(err));
    }, [serieDetailBaseUrl, videoUrl]);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">{name}</h1>
            {videoKey && <VideoSection videoKey={videoKey}/>}
            <SerieDetailCard posterPath={poster_path} baseImageUrl={baseImageUrl} defaultImage={defaultImage}
                             overview={overview} voteAverage={vote_average} voteCount={vote_count}/>
        </div>
    );
};

SerieDetailCard.propTypes = {
    posterPath: PropTypes.any,
    baseImageUrl: PropTypes.string,
    defaultImage: PropTypes.string,
    overview: PropTypes.any,
    voteAverage: PropTypes.any,
    voteCount: PropTypes.any
};

export default SerieDetail;
