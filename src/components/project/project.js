import React from 'react';
import Card from 'react-bootstrap/Card';
import './project.css';

function project(props) {
    return (
        <Card className="my-2 mx-3 border border-light" key={props.id}>
            <Card.Img variant="top" className="projImg" src={props.image} />
            <Card.Body className="text-center">
                <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
                <hr />
                <div className="row">
                    {/* <i class="bootstrapicon devicon-bootstrap-plain-wordmark colored"></i> */}
                    <div className="col-lg-6">
                        <a href={props.demoLink}>
                            <Card.Text id="demorepotext" style={{ color: "black" }}>Demo</Card.Text>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href={props.repoLink}>
                            <Card.Text id="demorepotext" style={{ color: "black" }}>Repo</Card.Text>
                        </a>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}

export default project;