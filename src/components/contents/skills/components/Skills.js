import React from "react";
import generalSkillDataAll from "./general-skilldata"
import ctfSkillDataAll from "./ctf-skilldata";
import programmingSkillDataAll from "./programming-skilldata"
import "./skills.css";

class Skills extends React.Component {
    render() {

        return (
            <div >
                <h1>Skills</h1>

                {/*----- General skills section -----*/}
                <h2>General Skills</h2>
                <p>
                    General skills, what I experienced more than once.
                </p>

                <ul className="skill">
                    {/* list general skills */}
                    {generalSkillDataAll.map((generalSkillData) => {
                        return (
                            <li>
                                {/* print general skill name */}
                                {generalSkillData.skill}

                                {/* list general skill detail */}
                                <ul className="skill-detail">
                                    {generalSkillData.detail.map((generalSkillDetail) => {
                                        return (
                                            <li>{generalSkillDetail}</li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>

                {/*----- CTF skills section -----*/}
                <h2>CTF</h2>
                <p>
                    Capture The Flag - A competition that requires knowledge and skills of cybersecurity.
                    Problems in CTF are often divided into some categories: Reversing, Pwn, Web, etc.
                    In this section, I'll introduce what I can do (or I experienced) in each categories.
                </p>

                <div className="skills-ctf-container">

                    {/* print CTF skill explanation boxes separated by category */}
                    {ctfSkillDataAll.map((ctfSkillDataForEachCategory) => {
                        return (
                            <div className="skills-ctf-grid" key={ctfSkillDataForEachCategory.bgColor} style={{ backgroundColor: ctfSkillDataForEachCategory.bgColor }}>

                                {/* print CTF category */}
                                <h3>{ctfSkillDataForEachCategory.category}</h3>

                                {/* list skills in each category */}
                                <ul className="skill">
                                    {ctfSkillDataForEachCategory.skills.map((ctfSkillForEachCategory) => {
                                        return (
                                            <li>

                                                {/* list skill detail */}
                                                {ctfSkillForEachCategory.skill}
                                                <ul className="skill-detail">
                                                    {ctfSkillForEachCategory.detail.map((ctfSkillDetail) => {
                                                        return (
                                                            <li>{ctfSkillDetail}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/*----- Programming skills section -----*/}
                <h2>Programming</h2>
                <p>
                    Programming languages which I wrote more than once. As you can see from my GitHub page (see "Links" page),
                    I don't have any expensive works. I will be glad if you don't look down me...
                </p>

                <div className="skills-programming-container">
                    {/* list programming skills and detail of each skill */}
                    {programmingSkillDataAll.map((programmingSkillData) => {
                        return (
                            <>
                                <h3>{programmingSkillData.lang}</h3>
                                <p>{programmingSkillData.detail}</p>
                            </>
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default Skills;