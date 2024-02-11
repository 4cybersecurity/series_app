import React, {useEffect, useState} from "react";
import axios from "axios";
import SerieCard from "../context/SerieCard";
const API_KEY = process.env.REACT_APP_TVDB_KEY;


const Main = () => {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSeries()
    }, []);
    const getSeries = (API) => {
        setLoading(true)
        axios.get(API)
            .then(res => setSeries(res.data.results))
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
    }
    return (
        <>
            <h2>Main</h2>
            {/*<div className="d-flex justify-content-center flex-wrap">*/}
            {/*    {loading ? (*/}
            {/*        <div className="spinner-border text-primary m-5" role="status">*/}
            {/*            <span className="sr-only">Loading...</span>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        series.map((serie) => <SerieCard key={{serie.id} {...serie}} />)*/}
            {/*    )}*/}
            {/*</div>*/}
        </>
    )
}

export default Main;