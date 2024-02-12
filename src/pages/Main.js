import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import SerieCard from "../context/SerieCard";
import {AuthContext} from "../context/AuthContext";
import {toastErrorNotify, toastWarnNotify} from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;


const Main = () => {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {currentUser} = useContext(AuthContext);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm && currentUser) {
            getSeries(SEARCH_API + searchTerm);
        } else if (!currentUser) {
            toastWarnNotify("Please log in to search a serie");
        } else {
            toastWarnNotify("Please enter a text");
        }
    };
    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input type="search"
                       className="search-input"
                       placeholder="Search series..."
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
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