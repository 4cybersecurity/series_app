import React from "react";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class SerieDetailCard extends React.Component {
    render() {
        return <Card className="mb-3">
            <Row className="g-0">
                <Col md={4}>
                    <Image
                        src={this.props.posterPath ? this.props.baseImageUrl + this.props.posterPath : this.props.defaultImage}
                        className="img-fluid rounded-start"
                        alt="Serie Poster"
                    />
                </Col>
                <Col md={8} className="d-flex flex-column">
                    <Card.Body>
                        <Card.Title className="mb-3">Overview</Card.Title>
                        <Card.Text>{this.props.overview}</Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-2">
                            <strong>Rate:</strong> {this.props.voteAverage}
                        </ListGroup.Item>
                        <ListGroup.Item className="mb-2">
                            <strong>Total Vote:</strong> {this.props.voteCount}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to={-1} className="btn btn-secondary">
                                Go Back
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Card>;
    }
}