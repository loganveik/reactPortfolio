import React from 'react';
import './languagepic.css';

function language(props) {
    return (
        <div className="col-lg-4" key={props.id}>
            <i className={props.icon} id={props.idname}></i>
        </div>

    )
}

export default language;