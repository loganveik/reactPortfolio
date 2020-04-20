import React from 'react';
import Header from '../components/header/header';
import profpic from '../images/IMG_2558.jpg';
import './portfolioANDabout.css';
import Footer from '../components/footer/footer';
import githubfooterIMG from '../images/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png';

function AboutPage() {
    return (
        <div>
            <Header
                aboutORportfolio={"About"}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="picview text-center">
                            <img src={profpic} alt="loganveik" className="profpic" />
                        </div>
                        <div className="contactandresourcesview rounded text-center mt-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="mb-4">Contact</h2>
                                    <div>
                                        <h5 id="essentialtext">Email:</h5>
                                        <p id="essentialtext">jumpswervelogan@gmail.com</p>
                                    </div>
                                    <div>
                                        <h5 id="essentialtext">Phone:</h5>
                                        <p id="essentialtext">480-826-5883</p>
                                    </div>
                                    <hr />
                                    <h2 className="mb-4">Resources</h2>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <a className="resources" href="https://drive.google.com/file/d/1qW3Bu143GRV_RYZgg_0JSc3VGvqKln5Z/view?usp=sharing">
                                                <img className="resourcepic"
                                                    src="https://cdn.clipart.email/cf55d28ef56a7db1f55a63baa5e01d0c_upcoming-events_256-256.png"
                                                    style={{ height: 60 }} alt="resume" />
                                            </a>
                                            <p className="my-3" id="essentialtext">Resume</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <a className="resources" href="https://github.com/loganveik">
                                                <img className="resourcepic" src="https://image.flaticon.com/icons/svg/25/25231.svg"
                                                    style={{ height: 60 }} alt="github profile" />
                                            </a>
                                            <p className="my-3" id="essentialtext">Github</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <a className="resources" href="https://www.linkedin.com/in/logan-veik-018187196/">
                                                <img className="resourcepic" src="https://image.flaticon.com/icons/png/512/61/61109.png"
                                                    style={{ height: 60 }} alt="linked in profile" />
                                            </a>
                                            <p className="my-3" id="essentialtext">LinkedIn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="aboutmelanguageview text-center rounded">
                                    <h2 className="mt-3">About Me</h2>
                                    <h5 class="bio mx-5" id="essentialtext">My name is Logan Veik, I am a full-stack web developer with
                                        the objective to create practical and useful web applications. I am currently enrolled in the
                                        University of Arizona Full-Stack Coding Bootcamp. Check out the rest of my portfolio to see both my
                                        independent and team projects, and below to see all the languages I have become proficient with. Including React, which was used to build this entire portfolio.
                                    </h5>
                                    <hr />
                                    <h2>Languages</h2>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" id="languagepic" />
                                            <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" id="languagepic" />
                                            <img src="https://i.ya-webdesign.com/images/bootstrap-svg-icon.png" id="languagepic" />
                                            <img src="https://cdn.clipart.email/219a9f2a1941e9767b17ce98eae4a42f_vector-javascript-picture-2114926-vector-javascript_350-350.png" id="languagepic" />
                                            <img src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png" id="languagepic" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" id="languagepic" style={{height: 40, width: 75}} />
                                            <img src="https://cdn.iconscout.com/icon/free/png-256/nodejs-226032.png" id="languagepic" />
                                            <img src="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png" id="languagepic" />
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" id="languagepic" />
                                            <img src="https://cdn.iconscout.com/icon/free/png-256/sequelize-1-1175002.png" id="languagepic" />
                                            <img src="https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png" id="languagepic" />
                                            <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png" id="languagepic" style={{width: 75}} />
                                            <img src="https://cdn.iconscout.com/icon/free/png-512/gimp-5-1175224.png" id="languagepic" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                githubfooterimg={githubfooterIMG}
            />
        </div>
    );
}

export default AboutPage;