import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Image, Badge } from "react-bootstrap";
import { toastWarnNotify } from "../helpers/ToastNotify";

const IMG_API = "https://www.themoviedb.org/t/p/w1280/";
const defaultImage =
    "https://www.themoviedb.org/t/p/w1280/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg";

const SerieCard = ({ name, poster_path, overview, vote_average, id }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleVoteClass = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    };

    return (
        <div
            className="serie col-3"
            onClick={() => {
                !currentUser && toastWarnNotify("Please log in to see details");
                navigate("/details/" + id);
            }}
        >
            <Image
                loading="lazy"
                src={poster_path ? IMG_API + poster_path : defaultImage}
                alt="serie-card"
            />
            <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
                <h5>{name}</h5>
                {currentUser && (
                    <Badge className={`tag ${handleVoteClass(vote_average)}`}>
                        {vote_average}
                    </Badge>
                )}
            </div>
            <div className="serie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default SerieCard;
