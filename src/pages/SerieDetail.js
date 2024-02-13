import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Card, Row, Col, Image, ListGroup} from "react-bootstrap";
import VideoSection from "../components/VideoSection";

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
            <Card className="mb-3">
                <Row className="g-0">
                    <Col md={4}>
                        <Image
                            src={poster_path ? baseImageUrl + poster_path : defaultImage}
                            className="img-fluid rounded-start"
                            alt="Serie Poster"
                        />
                    </Col>
                    <Col md={8} className="d-flex flex-column">
                        <Card.Body>
                            <Card.Title className="mb-3">Overview</Card.Title>
                            <Card.Text>{overview}</Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="mb-2">
                                <strong>Rate:</strong> {vote_average}
                            </ListGroup.Item>
                            <ListGroup.Item className="mb-2">
                                <strong>Total Vote:</strong> {vote_count}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={-1} className="btn btn-secondary">
                                    Go Back
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default SerieDetail;
