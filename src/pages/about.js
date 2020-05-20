import React from 'react';
import Header from '../components/header/header';
import profpic from '../images/IMG_2558.jpg';
import './portfolioANDabout.css';
import Footer from '../components/footer/footer';
import githubfooterIMG from '../images/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png';
import languages from '../JSON/languages';
import Language from '../components/languagepic/languagepic';

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
                                                    <a className="resources" href="https://drive.google.com/open?id=1tiXCMvwznPjx71Ui0AOhlyu4aq9BEkrNFeg01pOKaHw">
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
                                                <Language
                                                    id={languages[0].id}
                                                    icon={languages[0].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[1].id}
                                                    icon={languages[1].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[2].id}
                                                    icon={languages[2].icon}
                                                    idname={"languagepic"}
                                                />
                                            </div>
                                            <div className="row my-3">
                                                <Language
                                                    id={languages[3].id}
                                                    icon={languages[3].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[4].id}
                                                    icon={languages[4].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[5].id}
                                                    icon={languages[5].icon}
                                                    idname={"languagepic"}
                                                />
                                            </div>
                                            <div className="row my-3">
                                                <Language
                                                    id={languages[6].id}
                                                    icon={languages[6].icon}
                                                    idname={"languagepicwhite"}
                                                />
                                                <Language
                                                    id={languages[7].id}
                                                    icon={languages[7].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[8].id}
                                                    icon={languages[8].icon}
                                                    idname={"languagepic"}
                                                />
                                            </div>
                                            <div className="row my-3">
                                                <Language
                                                    id={languages[9].id}
                                                    icon={languages[9].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[10].id}
                                                    icon={languages[10].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[11].id}
                                                    icon={languages[11].icon}
                                                    idname={"languagepic"}
                                                />
                                            </div>
                                            <div className="row my-3">
                                                <Language
                                                    id={languages[12].id}
                                                    icon={languages[12].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[13].id}
                                                    icon={languages[13].icon}
                                                    idname={"languagepic"}
                                                />
                                                <Language
                                                    id={languages[14].id}
                                                    icon={languages[14].icon}
                                                    idname={"languagepic"}
                                                />
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