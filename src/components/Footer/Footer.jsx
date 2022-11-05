import React, { useState } from "react";

function Footer() {
    const [footerText, setFooterText] = useState(`Made with love by Kiarash Jamali :)`);
    return (
        <div className="container-fluid py-3 mt-4 shadow">
            <p className="m-0 text-center">
                {
                    footerText
                }
            </p>
        </div>
    )
}

export default Footer;