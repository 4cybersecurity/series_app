import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const SerieDetail = () => {
    const [serieDetails, setSerieDetails] = useState("");
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
    const baseImageUrl = "https://www.themoviedb.org/t/p/w1280/";
    const defaultImage = "https://www.themoviedb.org/t/p/w1280/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg";


    useEffect(() => {
        axios.get(serieDetailBaseUrl)
            .then(res => setSerieDetails(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="container py-5">
            <h1 className="text-center">{name}</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={poster_path ? baseImageUrl + poster_path : defaultImage}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column ">
                        <div className="card-body">
                            <h5 className="card-title">Overview</h5>
                            <p className="card-text">{overview}</p>
                        </div>
                        <ul className="list-group ">
                            <li className="list-group-item">{"Rate : " + vote_average}</li>
                            <li className="list-group-item">
                                {"Total Vote : " + vote_count}
                            </li>
                            <li className="list-group-item">
                                <Link to={-1} className="card-link">Go Back</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}
export default SerieDetail;