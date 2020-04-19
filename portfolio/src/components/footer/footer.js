import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <footer class="text-center">
            <p class="footertext mx-1">© Logan Veik</p>
            <p class="footertext mx-1">|</p>
            <a href="https://github.com/loganveik/reactPortfolio">
                <img
                    src={props.githubfooterimg}
                    style={{ width: 25, height: 25 }} class="mx-1" />
            </a>
        </footer>
    );
}

export default Footer;