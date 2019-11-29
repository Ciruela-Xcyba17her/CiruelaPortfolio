import React from "react";
import ctfSkillDataAll from "./ctf-skilldata";
import programmingSkillDataAll from "./programming-skilldata"
import "./skills.css";

class Skills extends React.Component {
    render() {

        return (
            <div >
                <h1>Skills</h1>

                <h2>CTF</h2>
                <p>
                    Capture The Flag - Competition that requires knowledge and skills of cybersecurity.
                    Problems in CTF are often divided into some categories: Reversing, Pwn, Web, etc.
                    In this section, I'll introduce what I can do in each categories.
                </p>

                {/*Unreadable...*/}
                <div className="skills-ctf-container">
                    {ctfSkillDataAll.map((ctfSkillDataForEachCategory) => {
                        return (
                            <div className="skills-ctf-grid" key={ctfSkillDataForEachCategory.bgColor} style={{ backgroundColor: ctfSkillDataForEachCategory.bgColor }}>
                                <h3>{ctfSkillDataForEachCategory.category}</h3>
                                <ul className="skill">
                                    {ctfSkillDataForEachCategory.skills.map((skills) => {
                                        return (
                                            <li>
                                                {skills.skill}
                                                <ul className="skill-detail">
                                                    {skills.detail.map((detail) => {
                                                        return (
                                                            <li>{detail}</li>
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

                <h2>Programming</h2>
                <p>
                    Programming languages which I wrote more than once. As you can see from my GitHub page (see "Links" page),
                    I don't have any expensive works. I will be glad if you don't look down me.
                </p>
                <div className="skills-programming-container">
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