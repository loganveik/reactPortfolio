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
                portfolio={"linkText mx-3 text-decoration-none font-weight-lighter"}
                about={"linkText mx-3 text-decoration-none font-weight-bolder"}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="picview text-center">
                            <img src={profpic} alt="loganveik" className="profpic rounded-circle" />
                        </div>
                        <div className="card aboutmeview mt-4 mb-3" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                            <div className="card-body">
                                <div className="rounded text-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h2 >About Me</h2>
                                            <hr style={{ background: "white" }} />
                                            <h5 className="bio" id="essentialtext">My name is Logan Veik, I am a full-stack web developer with
                                                the objective to create practical and useful web applications. I am a recent graduate from the
                                                University of Arizona Full-Stack Coding Bootcamp. Check out the rest of my portfolio to see both my
                                                independent and team projects, plus all the languages I have become proficient with. Including React, which was used to build this entire portfolio.
                                    </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card contactresourceslanguageview" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center rounded">
                                            <h2 className="">Contact</h2>
                                            <hr style={{ background: "white" }} />
                                            <div>
                                                <p id="essentialtext"><strong>Phone: </strong>480-826-5883</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 my-1">
                                                    <a className="resources" href="https://drive.google.com/file/d/1qW3Bu143GRV_RYZgg_0JSc3VGvqKln5Z/view?usp=sharing">
                                                        <i className="far fa-file-alt resourcepic"></i>
                                                    </a>
                                                </div>
                                                <div className="col-lg-3 my-1">
                                                    <a className="resources" href="https://github.com/loganveik">
                                                        <i className="fab fa-github resourcepic"></i>
                                                    </a>
                                                </div>
                                                <div className="col-lg-3 my-1">
                                                    <a className="resources" href="https://www.linkedin.com/in/logan-veik-018187196/">
                                                        <i className="fab fa-linkedin resourcepic"></i>
                                                    </a>
                                                </div>
                                                <div className="col-lg-3 my-1">
                                                    <a className="resources" href="mailto:jumpswervelogan@gmail.com">
                                                        <i className="far fa-envelope resourcepic"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <h2 className="mt-4">Programs & Languages</h2>
                                            <hr style={{ background: "white" }} />
                                            <div className="row my-3">
                                                <div className="col-lg-4">
                                                    <i className="devicon-html5-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-css3-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-bootstrap-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col-lg-4">
                                                    <i className="devicon-javascript-plain colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-react-original-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-mongodb-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col-lg-4">
                                                    <i className="devicon-sequelize-plain-wordmark colored" id="languagepicwhite"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-nodejs-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-webpack-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col-lg-4">
                                                    <i className="devicon-gimp-plain colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-git-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-express-original-wordmark" id="languagepic"></i>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col-lg-4">
                                                    <i className="devicon-mysql-plain-wordmark colored" id="languagepicwhite"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-jquery-plain-wordmark colored" id="languagepic"></i>
                                                </div>
                                                <div className="col-lg-4">
                                                    <i className="devicon-visualstudio-plain colored" id="languagepic"></i>
                                                </div>
                                            </div>
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