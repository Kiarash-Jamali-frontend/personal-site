import React, { useState } from "react";

import MobileMenu from "../MobileMenu/MobileMenu";

import styles from "./Header.module.css";

// Header component
function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    const hideMobileMenu = () => {
        setActiveMenu(false);
    }

    const showMobileMenu = () => {
        setActiveMenu(true);
    }

    return (
        <>
            <header className={`container-fluid px-4 px-lg-5 py-3 ${styles.Header}`}>
                <div className="row row-cols-auto justify-content-between align-items-center px-1 px-lg-5">
                    <ul className="d-none d-lg-flex list-unstyled">
                        <li><i className="bi bi-house-door me-1"></i><a href="">Main Page</a></li>
                        <li><i className="bi bi-person me-1"></i><a href="#info">Info</a></li>
                        <li><i className="bi bi-mortarboard me-1"></i><a href="#skills">Skills</a></li>
                        <li><i className="bi bi-briefcase me-1"></i><a href="#worksamples">Work Samples</a></li>
                    </ul>
                    {/*Hamburger menu*/}
                    <div onClick={() => {
                        setActiveMenu(!activeMenu);
                    }} className={`${styles.HamburgerMenu} d-flex d-lg-none`} style={{
                        zIndex: "105",
                    }}>
                        <div style={{
                            transform: !activeMenu ? "" : "rotate(45deg)",
                        }}></div>

                        <div style={{
                            transform: !activeMenu ? "" : "translateX(-100%)",
                            opacity: !activeMenu ? "" : "0",
                        }}></div>

                        <div style={{
                            transform: !activeMenu ? "" : "rotate(-45deg)",
                        }}></div>
                    </div>

                    {/*Mobile menu*/}
                    <MobileMenu activeMenu={activeMenu} hideMobileMenu={hideMobileMenu} showMobileMenu={showMobileMenu} />

                    <div className={styles.WorkWithUs}>
                        <a href="#contactus"><i className="bi bi-telephone"></i> Work With Us</a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;