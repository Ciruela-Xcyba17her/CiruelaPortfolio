import React from "react";
import terminalDataAll from "./terminaldata";
import footstepDataAll from "./footstepdata";
import "./aboutme.css";

class Aboutme extends React.Component {
    render() {
        return (
            <div>
                <h1>About me</h1>
                <p>Hello, I'm happy to meet you here! In this page I want to introduce myself roughly.</p>

                <h2>Basic info</h2>
                <div className="terminal">
                    {
                        terminalDataAll.map((terminalData) => {
                            return (
                                <div>
                                    {/* command-like part */}
                                    <div class="terminal-cmd">
                                        <span style={{ color: `#80c000` }}>Ciruela@Ubuntu</span>
                                        :
                                        <span style={{ color: `#40a0c0` }}>~</span>
                                        $
                                        {" " + terminalData.cmd}
                                        <br />
                                    </div>

                                    {/* command-result part */}
                                    <div class="terminal-result">
                                        {terminalData.result}
                                        <br /><br />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h2>My footsteps</h2>
                <div className="footstep-container">
                    {
                        footstepDataAll.map((footstepData) => {
                            return (
                                <ul className="footstep-box">
                                    <li className="footstep-time">{footstepData.time}</li>
                                    <li className="footstep-footstep">{footstepData.footstep}</li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Aboutme;