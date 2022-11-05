import React, { useState } from "react";

import styles from "./WorkSamples.module.css";

// Work samples
function WorkSamples() {
    const [workSamples, setWorkSamples] = useState([
        {
            img: "./Images/ws1.png",
            label: "Coding ostadlink website by React framework",
            link: "#"
        },
        {
            img: "./Images/ws2.png",
            label: "Login page",
            link: "#"
        },
        {
            img: "./Images/ws3.png",
            label: "Coding File arvan website by Bootstrap version 5",
            link: "#"
        },
        {
            img: "./Images/ws4.png",
            label: "Coding MTSA Decor website by React framework",
            link: "#"
        }
    ])
    return (
        <>
            <section data-aos="fade" id="worksamples" className="container mt-5">
                <div className={`${styles.WorkSamples}`}>
                    <div>
                        <h5 className={`mb-4 ${styles.Label}`}>Work Samples</h5>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2">
                        {
                            workSamples.map((item, index) => {
                                return (
                                    <div key={index} className="p-2">
                                        <a className={styles.workSamplesItem} href={item.link}>
                                            <img loading="lazy" className="img-fluid" src={item.img} alt={item.label} />
                                            <div>
                                                <h5>{item.label}</h5>
                                                <div>
                                                    <i className="bi bi-link-45deg me-2"></i>
                                                    Show more
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkSamples;