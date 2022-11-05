import React from "react";
import { useEffect } from "react";

import Typewriter from 'typewriter-effect/dist/core';

import styles from "./WelcomeSection.module.css";

// Welcome section component
function WelcomeSection() {
    useEffect(() => {
        new Typewriter('#welcomeText', {
            strings: ['Kiarash Jamali', 'Front End Developer', "Teacher", "Web Developer", "Java Script Programmer", "React Developer", "Front End Teacher"],
            autoStart: true,
            loop: true,
        });
    })
    return (
        <>
            <section className={`container-fluid ${styles.WelcomeSection}`}
                style={{
                    backgroundImage: "url('./Images/bg.jpg')"
                }}>
                <div>
                    <img data-aos="fade" src="./Images/profile.jpg" className={`img-fluid ${styles.profile}`} alt="Profile" />
                    <h1 data-aos="fade" data-aos-delay="1000" className="my-4">Hi! I am <span id="welcomeText" style={{
                        color: "#28b3cc",
                    }}></span></h1>
                    <h2 data-aos="fade-up" data-aos-delay="1500" className="mb-4">Follow me in social media platforms</h2>
                    <div data-aos="fade-up" data-aos-delay="2000" className={`d-flex justify-content-center ${styles.SocialMediaButtons}`}>
                        <a href=""><i className="bi bi-github"></i>My Github</a>
                        <a href="" className="ms-3"><i className="bi bi-instagram"></i> Instagram</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WelcomeSection;