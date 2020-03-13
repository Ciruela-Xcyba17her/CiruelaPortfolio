import React from "react";
import LinksBoxDataAll from "./linksdata"
import { LinksButton, LinksBox } from "./links-components";

class Links extends React.Component {
    render() {
        return (
            <div>
                <h1>Links</h1>
                <p>Most of my works are written in Japanese.</p>
                <div className="links-container">
                    {LinksBoxDataAll.map((LinksBoxData) => {
                        return (
                            <LinksBox bgColor={LinksBoxData.bgColor} key={LinksBoxData.serviceName}>
                                <h2>{LinksBoxData.serviceName}</h2>
                                <p>{LinksBoxData.description}</p>
                                <p>{LinksBoxData.addition}</p>
                                <LinksButton href={LinksBoxData.href} key={LinksBoxData.serviceName} value={"Move to " + LinksBoxData.serviceName + " account"} />
                            </LinksBox>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Links;