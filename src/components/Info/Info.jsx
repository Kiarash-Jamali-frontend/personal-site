import React, { useState } from "react";

import styles from "./Info.module.css";

function Info() {
    const [biography, setBiography] = useState(
        <>
            Hi! i am Kiarash Jamali.
            <br />
            I Love React framework.
            <br />
            I entered the field of web design for more than 3 years and I work with JS language to an advanced level
        </>
    );
    const [email, setEmail] = useState("Kiarash.Jamali.Frontend@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("0933 604 1238");
    const [instagramAccount, setInstagramAccount] = useState("Kiarash.Web");
    const [whatsappAccount, setWhatsappAccount] = useState("0933 604 1238");
    return (
        <>
            <section data-aos="fade" id="info" className="container my-5">
                <div className={styles.InformationBox}>
                    <div className="row row-cols-1 row-cols-lg-2 justify-content-between align-items-center">
                        {/*Biography*/}
                        <div className="mb-4 mb-lg-0">
                            <h5>Biography</h5>
                            <p className="mt-3 mb-0">
                                {
                                    biography
                                }
                            </p>
                        </div>
                        {/*Contact us*/}
                        <div>
                            <h5>Contact with me</h5>
                            <div className={styles.ContactUs + " mt-3"}>
                                <div className="mb-1">
                                    <i className="bi bi-telephone me-2"></i>
                                    {
                                        phoneNumber
                                    }
                                </div>
                                <div className="mb-1">
                                    <i className="bi bi-envelope me-2"></i>
                                    {
                                        email
                                    }
                                </div>
                                <div className="mb-1">
                                    <i className="bi bi-instagram me-2"></i>
                                    {
                                        instagramAccount
                                    }
                                </div>
                                <div className="mb-1">
                                    <i className="bi bi-whatsapp me-2"></i>
                                    {
                                        whatsappAccount
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info;