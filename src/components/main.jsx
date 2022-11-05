import React, { useEffect } from 'react';

// Import bootstrap
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Import bootstrap icons
import "./../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// Import components
import Header from './Header/Header';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import Info from './Info/Info';
import Skills from './Skills/Skills';
import WorkSamples from './WorkSamples/WorkSamples';

// Import aos
import "./../../node_modules/aos/dist/aos.css";
import Aos from 'aos';

// Import styles
import styles from "./main.module.css";
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

// Init aos
Aos.init({
    delay: 300,
});

// Main component
function Main() {
    useEffect(() => {
        document.title = "Kiarash Jamali Asl | Front End Developer.";
        // Init aos libary
        Aos.init();
    })
    
    return (
        <>
            <main className={styles.mainContainer}>
                <Header />
                <WelcomeSection />
                <Info />
                <Skills />
                <WorkSamples />
                <ContactUs />
                <Footer />
            </main>
        </>
    );
}

export default Main;