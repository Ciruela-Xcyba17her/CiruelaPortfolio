import React from "react";
import diaryDataAll from "./diarydata";
import "./diary.css";

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h1>Diary</h1>
                <p>My daily progresses.</p>
                <div className="diary-container">
                    {diaryDataAll.map((diaryData) => {
                        return (
                            <div className="diary-box" key={diaryData.time}>
                                <div className="diary-time">{diaryData.time}</div>
                                <div className="diary-progress">
                                    <ul className="progress">
                                        {diaryData.progresses.map((progress) => {
                                            return (
                                                <li key={progress.progress}>
                                                    {progress.progress}
                                                    <ul className="detail">
                                                        {progress.detail.map((detail) => {
                                                            return <li key={detail}>{detail}</li>
                                                        })}
                                                    </ul>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Skills;