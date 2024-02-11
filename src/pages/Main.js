import React, {useEffect, useState} from "react";
import axios from "axios";
import SerieCard from "../context/SerieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;


const Main = () => {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSeries(FEATURED_API)
    }, []);
    const getSeries = (API) => {
        setLoading(true)
        axios.get(API)
            .then(res => setSeries(res.data.results))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (searchTerm && currentUser) {
    //         getMovies(SEARCH_API + searchTerm);
    //     } else if (!currentUser) {
    //         toastWarnNotify("Please log in to search a movie");
    //     } else {
    //         toastWarnNotify("Please enter a text");
    //     }
    // };
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap">
                {loading ? (
                    <div className="spinner-border text-primary m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    series.map((serie) => <SerieCard key={serie.id} {...serie}/>)
                )}
            </div>
        </>
    )
}

export default Main;