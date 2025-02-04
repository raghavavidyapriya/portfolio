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

                <div className="projects__content img__container project2">
                    <div>
                        <i className="uil uil-code-branch projects__icon"></i>
                        <h3 className="projects__title">Intrusion Prediction</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===2 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content  img__container project2">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Intrusion Detection Prediction</h3>
                            <p className="projects__modal-description">Developed an intrusion detection system using machine learning, achieving 94% accuracy in detecting cyber attacks through advanced preprocessing and model optimization.
                            </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Developed a cybersecurity solution using machine learning to predict cyber attacks based on network packet data.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Applied preprocessing techniques (EDA, cleaning, sampling, scaling, and visualization) to prepare the dataset, reducing data redundancy by 39%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Used Naive Bayes, Random Forest, and hyperparameter-tuned XGBoost models, achieving an average accuracy of 94%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Conducted hyperparameter tuning and cross-validation to enhance model performance, with XGBoost outperforming other classifiers.
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