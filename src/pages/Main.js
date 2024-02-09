import React, {useEffect, useState} from "react";
import axios from "axios";
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
        </>
    )
}

export default Main;