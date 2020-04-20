import React from 'react';
import Header from '../components/header/header';
import Project from '../components/project/project';
import projects from '../projectJSON/projects.json';
import marvelIMG from '../images/marvel.png';
import ladsIMG from '../images/lads.png';
import proj1IMG from '../images/proj1.png';
import weatherIMG from '../images/weatherdashboard.png';
import empldirIMG from '../images/Screen Shot 2020-04-16 at 11.18.21 PM.png';
import pwgIMG from '../images/pwg.png';
import githubfooterIMG from '../images/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png';
import './portfolioANDabout.css';
import Footer from '../components/footer/footer';

function PortfolioPage() {
    return (
        <div>
            <Header
                aboutORportfolio={"Portfolio"}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="projectview text-center rounded">
                        <h2 className="my-2">Projects</h2>
                        <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[0].id}
                                        image={marvelIMG}
                                        title={projects[0].title}
                                        demoLink={projects[0].demoLink}
                                        repoLink={projects[0].repoLink}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[1].id}
                                        image={ladsIMG}
                                        title={projects[1].title}
                                        demoLink={projects[1].demoLink}
                                        repoLink={projects[1].repoLink}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[2].id}
                                        image={proj1IMG}
                                        title={projects[2].title}
                                        demoLink={projects[2].demoLink}
                                        repoLink={projects[2].repoLink}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[3].id}
                                        image={weatherIMG}
                                        title={projects[3].title}
                                        demoLink={projects[3].demoLink}
                                        repoLink={projects[3].repoLink}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[4].id}
                                        image={empldirIMG}
                                        title={projects[4].title}
                                        demoLink={projects[4].demoLink}
                                        repoLink={projects[4].repoLink}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Project
                                        id={projects[5].id}
                                        image={pwgIMG}
                                        title={projects[5].title}
                                        demoLink={projects[5].demoLink}
                                        repoLink={projects[5].repoLink}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        <Footer 
        githubfooterimg={githubfooterIMG}
        />
        </div>
    );
}

export default PortfolioPage;