import React, { useState } from "react";

import styles from "./ContactUs.module.css";

function ContactUs() {
    const [contactUsMethods, setContactUsMethods] = useState({
        instagram: "#",
        github: "#",
        telegram: "#",
        twitter: "#",
        address: `IRAN / Khoozestan / Ahvaz`,
        phoneNumber: "0933 604 1238",
        email: "Kiarash.Jamali.Frontend@gmail.com",
    });
    return (
        <section data-aos="fade" className="container mt-5" id="contactus">
            <div className={styles.ContactUs}>
                <h5 className="mb-4">Contact us</h5>
                <div className="row row-cols-1 row-cols-xl-2 justify-content-between align-items-center">
                    <div className="mb-3 mb-xl-0">
                        <img className="img-fluid" src="./Images/contactus.png" alt="Contact us" />
                        <p className="text-center">You can join our family through the following social networks :)</p>
                        <hr />
                        <div className={`d-flex justify-content-center py-2 ${styles.SocialMediaButtons}`}>
                            <div><a href={contactUsMethods.instagram}><i className="bi bi-instagram"></i></a></div>
                            <div><a href={contactUsMethods.github}><i className="bi bi-github"></i></a></div>
                            <div><a href={contactUsMethods.telegram}><i className="bi bi-telegram"></i></a></div>
                            <div><a href={contactUsMethods.twitter}><i className="bi bi-twitter"></i></a></div>
                        </div>
                    </div>

                    <div className={styles.ContactUsMethods}>
                        {/*Location*/}
                        <a href="#">
                            <i className="bi bi-geo-alt-fill"></i>
                            <span>{contactUsMethods.address}</span>
                        </a>

                        {/*Phone number*/}
                        <a href={`tel:${contactUsMethods.phoneNumber}`}>
                            <i className="bi bi-telephone-fill"></i>
                            <span>{contactUsMethods.phoneNumber}</span>
                        </a>

                        {/*Email*/}
                        <a href="">
                            <i className="bi bi-envelope-fill"></i>
                            <span>{contactUsMethods.email}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;