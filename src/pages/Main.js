import React, {useContext, useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import SerieCard from "../components/SerieCard";
import {AuthContext} from "../context/AuthContext";
import {toastWarnNotify} from "../helpers/ToastNotify";
import * as PropTypes from "prop-types";
import {SearchForm} from "../forms/SearchForm";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;

const Main = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const {currentUser} = useContext(AuthContext);


    useEffect(() => {
        getSeries(FEATURED_API);
    }, []);

    const getSeries = (API) => {
        setLoading(true);
        axios
            .get(API)
            .then((res) => setSeries(res.data.results))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm && currentUser) {
            getSeries(SEARCH_API + searchTerm);
        } else if (!currentUser) {
            toastWarnNotify("Please log in to search a series");
        } else {
            toastWarnNotify("Please enter a search term");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <SearchForm onSubmit={handleSubmit} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            <div className="d-flex justify-content-center flex-wrap">

                {loading ? (
                    <Spinner animation="border" variant="primary"/>
                ) : (
                    series.map((serie) => <SerieCard key={serie.id} {...serie} />)
                )}

            </div>
        </>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

export default Main;
