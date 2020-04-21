import React from 'react';
import Card from 'react-bootstrap/Card';
import './project.css';

function project(props) {
    return (
        <Card className="my-2 mx-3 border border-light" key={props.id}>
            <div className="imgdiv" description={props.description}>
                <Card.Img variant="top" className="projImg" src={props.image} />
                {/* <div className="overlay">
                    <div className="text">{props.description}</div>
                </div> */}
            </div>
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