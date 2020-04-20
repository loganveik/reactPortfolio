import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <footer>
            <div className="row">
                {/* <p className="footertext mx-1">© Logan Veik</p>
                    <p className="footertext mx-1">|</p>
                    <a href="https://github.com/loganveik/reactPortfolio">
                        <img
                            src={props.githubfooterimg}
                            style={{ width: 25, height: 25 }} className="mx-1" alt="react portfolio repo" />
                    </a> */}
            </div>
        </footer>
    );
}

export default Footer;