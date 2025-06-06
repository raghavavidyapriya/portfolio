import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Stay Connected</h2>
            <span className="section__subtitle">Get in Touch</span>
            <div className="contact__info container grid">
                <a href="mailto:raghavavidyapriya@gmail.com"   target="_blank" rel="noopener noreferrer"  className="contact__card img__container gmail">
                    <i className="uil uil-envelope-send contact__card-icon"></i>
                    <h3 className="contact__card-title">E-mail</h3>
                    <span className="contact__card-data">raghavavidyapriya@gmail.com</span>

                    <a href="mailto:raghavavidyapriya@gmail.com"  target="_blank" rel="noopener noreferrer" className="contact__button">Write me {" "}
                        <i className="uil uil-arrow-right contact__button-icon"></i>
                    </a>
                </a>
                <a href="https://www.linkedin.com/in/raghavavidyapriya/"  target="_blank" rel="noopener noreferrer"  className="contact__card img__container linkedin">
                    <i className="uil uil-linkedin contact__card-icon"></i>
                    <h3 className="contact__card-title">LinkedIn</h3>
                    <span className="contact__card-data">@raghavavidyapriya</span>

                    <a href="https://www.linkedin.com/in/raghavavidyapriya/"  target="_blank" rel="noopener noreferrer" className="contact__button">Message me {" "}
                        <i className="uil uil-arrow-right contact__button-icon"></i>
                    </a>
                </a>
                <a href="https://github.com/raghavavidyapriya"   target="_blank" rel="noopener noreferrer" className="contact__card img__container instagram">
                    <i className="uil uil-github contact__card-icon"></i>
                    <h3 className="contact__card-title">GitHub</h3>
                    <span className="contact__card-data">@raghavavidyapriya</span>

                    <a href="https://github.com/raghavavidyapriya"  target="_blank" rel="noopener noreferrer" className="contact__button">My works {" "}
                        <i className="uil uil-arrow-right contact__button-icon"></i>
                    </a>
                </a>
            </div>
        </section>
    )
}

export default Contact