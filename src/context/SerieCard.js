import React from "react";

const SerieCard = ({name, poster_path, overview, vote_average, id}) => {
    console.log(props)
    return (
        <div className="serie">

            <img
                loading="lazy"
                src={poster_path ? IMG_API + poster_path : defaultImage}
                alt="serie-card"
            />
            <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
                <h5>{name}</h5>
            </div>
            <div className="serie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default SerieCard;