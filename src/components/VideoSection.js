import React from "react";
import {Card} from "react-bootstrap";

const VideoSection = ({videoKey}) => {
    return (
        <Card className="w-75 m-auto my-3">
            <Card.Body>
                <div className="ratio ratio-16x9">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                        title="YouTube video"
                        allowFullScreen
                    ></iframe>
                </div>
            </Card.Body>
        </Card>
    );
};

export default VideoSection;
