import React, { useState } from 'react';
import "./projects.css";

const Projects = () => {
        const [toggleState, setToggleState] =  useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Project Highlights</h2>
            <span className="section__subtitle">My Hands-on Experience</span>

            <div className="projects__container container grid">

                <div className="projects__content img__container project2">
                    <div>
                        <i className="uil uil-code-branch projects__icon"></i>
                        <h3 className="projects__title">Agent Quask</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===2 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content  img__container project2">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Agentic Product Support</h3>
                            <p className="projects__modal-description">
                                Agentic customer support system using CrewAI with 2 crews and 4 specialized agents, enabling multi-agent collaboration. Automatically identifies products via QR scan, generates hypotheses, and resolves queries using tools for manuals, websites, and with a custom Gemini-powered image analyzer.
                            </p>

                            <ul className="projects__modal-projects grid">

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Built a multi-agent AI system for intelligent product support of household products, consisting of 2 crews, 3 tools, and 4 specialized agents in a coordinated workflow flow powered by advanced Agentic Retrieval Augmented Generation.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Integrated FastAPI backend with React JS and Material UI, leveraging Google Gemini Flash 2.0 LLM with a 1 million token context window, enabling accurate, context-rich product support interactions for seamless user query resolution.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content img__container project1">
                    <div>
                        <i className="uil uil-brackets-curly projects__icon"></i>
                        <h3 className="projects__title">GenZ Hiring</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===1 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content img__container project1">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">GenZ Hiring</h3>
                            <p className="projects__modal-description">Developed an AI-powered resume analysis tool for personalized job suggestions, tailored resumes, and optimized career alignment for users.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Built a resume analysis tool using LLM, LangChain, and ChatGPT 3.5, offering tailored suggestions aligned with career goals.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Leveraged SerpAPI and web scraping to deliver personalized job suggestions, reducing job search time by 50%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Created customized resumes optimized for specific job applications, boosting success rates for users.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Designed for students, professionals, and job seekers, providing an efficient way to enhance career opportunities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="projects__content img__container project3">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">EVolution</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content  img__container project3">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">EVolution</h3>
                            <p className="projects__modal-description">Built a MERN e-commerce platform for EV accessories, achieving 50+ signups, with secure authentication, Stripe payments, real-time order tracking, and an intuitive admin panel.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Created a MERN full-stack e-commerce platform for electric vehicle accessories, achieving 50+ user signups on launch
day through an intuitive UI/UX design and deployed on Render for seamless accessibility.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Designed an intuitive admin panel and REST API with full CRUD functionality and live order tracking, streamlining
administrative tasks by 75% and enabling real-time updates, with comprehensive API testing performed using Postman.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Implemented secure JWT authentication and Stripe payment gateway, boosting payment success rates by 99%
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Projects