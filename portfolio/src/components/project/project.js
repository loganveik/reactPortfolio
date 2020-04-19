import React from 'react';
import Card from 'react-bootstrap/Card';
import './project.css';

function project(props) {
    return (
        <Card className="my-3 mx-3 projectCard" key={props.id}>
            <Card.Img variant="top" className="projImg" src={props.image} />
            <Card.Body className="text-center">
                <Card.Title>{props.title}</Card.Title>
                {/* <Card.Text>{}</Card.Text> */}
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                        <a href={props.demoLink}>
                            <Card.Text id="demorepotext">Demo</Card.Text>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href={props.repoLink}>
                            <Card.Text id="demorepotext">Repo</Card.Text>
                        </a>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}

export default project;