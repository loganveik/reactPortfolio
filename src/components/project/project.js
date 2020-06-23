import React from 'react';
import Card from 'react-bootstrap/Card';
import './project.css';

function project(props) {
    return (
        <Card id="card" className="my-2 mx-3 border border-light" key={props.id}>
            <Card.Img variant="top" className="projImg" src={props.image} />
            <Card.Body className="text-center">
                <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
                <hr />
                <div className="row">
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
        // <div className="card my-3">
        //     <div className="row no-gutters">
        //         <div className="col-md-4">
        //             <img src={props.image} className="projImg mt-1 mx-1" alt={props.title} />
        //         </div>
        //         <div className="col-md-8 my-2">
        //             <div className="card-body">
        //                 <h5 className="card-title" style={{ color: "black" }}>{props.title}</h5>
        //                 <p className="card-text" style={{ color: "black" }}>{props.description}</p>
        //             </div>
        //             <hr/>
        //             <div className="row">
        //                 <div className="col-lg-6">
        //                     <a href={props.demoLink}>
        //                         <Card.Text id="demorepotext" style={{ color: "black" }}>Demo</Card.Text>
        //                     </a>
        //                 </div>
        //                 <div className="col-lg-6">
        //                     <a href={props.repoLink}>
        //                         <Card.Text id="demorepotext" style={{ color: "black" }}>Repo</Card.Text>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default project;