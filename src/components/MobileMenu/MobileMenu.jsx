import React, { useState } from "react";

import styles from "./MobileMenu.module.css";

function MobileMenu(props) {
    return (
        <>
            <div className={styles.MobileMenuContainer} style={{
                transform: props.activeMenu === false ? "translateX(-100%)" : "translateX(0%)",
                opacity: props.activeMenu === false ? "0" : "1"
            }} onClick={props.hideMobileMenu}>
                <div data-aos="fade" className={styles.MobileMenu}>
                    <a href="" className="rounded-pill shadow">Home</a>
                    <a href="#info" className="rounded-pill shadow">Info</a>
                    <a href="#worksamples" className="rounded-pill shadow">Work Samples</a>
                    <a href="#skills" className="rounded-pill shadow">Skills</a>
                </div>
            </div>
        </>
    )
}

export default MobileMenu;