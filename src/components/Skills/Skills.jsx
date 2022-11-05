import React, { useState } from "react";

import styles from "./Skills.module.css";

function Skills() {
    const [skills, setSkills] = useState([
        {
            name: "HTML5 & CSS3",
            value: 95
        },
        {
            name: "Java Script",
            value: 70
        },
        {
            name: "Sass",
            value: 70
        },
        {
            name: "Git & Github",
            value: 80
        },
        {
            name: "NPM",
            value: 80
        },
        {
            name: "Bootstrap.v5",
            value: 90
        },
        {
            name: "React",
            value: 75
        },
        {
            name: "Responsive Layout",
            value: 100
        },
        {
            name: "FlexBox / Grid System",
            value: 100
        },
        {
            name: "English language",
            value: 60
        },
        {
            name: "Windows OS",
            value: 60
        },
        {
            name: "Microsoft VS Code",
            value: 90
        }
    ]);
    return (
        <>
            <section data-aos="fade" id="skills" className={`container my-5`}>
                <div className={`${styles.SkillsBox}`}>
                    <h5 className="mb-4">My Skills</h5>
                    <div className="row row-cols-1 row-cols-md-2 align-items-center">
                        {
                            skills.map((item, index) => {
                                return (
                                    <div key={index} className="mb-3">
                                        {/*Skill name*/}
                                        <div>
                                            {
                                                item.name
                                            }
                                        </div>
                                        {/*Skill value*/}
                                        <div className={`w-100 ${styles.SkillValue}`}>
                                            <div style={{
                                                width: item.value + "%",
                                            }}>

                                            </div>
                                        </div>
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

export default Skills;