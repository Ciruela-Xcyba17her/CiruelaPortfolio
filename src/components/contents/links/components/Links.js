import React from "react";
import { LinksButton, LinksBox } from "./links-components";

class Links extends React.Component {
    render() {
        const linksBoxConstants = [
            {
                serviceName: "Speaker Deck",
                description: "Some of my CTF writeups are uploaded as slides.",
                href: "https://speakerdeck.com/xcyba17her",
                bgColor: "#202060",
                addition: "",
            },
            {
                serviceName: "Hack The Box",
                description: "An online service to improve penetration testing skills and other cybersecurity skills.",
                href: "https://www.hackthebox.eu/profile/206153",
                bgColor: "#208020",
                addition: "",
            },
            {
                serviceName: "GitHub",
                description: "My cheap programs. No stars are given to me...",
                href: "https://github.com/Ciruela-Xcyba17her",
                bgColor: "#404040",
                addition: "",
            },
            {
                serviceName: "Twitter",
                description: "My Twitter account.",
                href: "https://twitter.com/__Xcyba17her_",
                bgColor: "#5050c0",
                addition: "",
            },
            {
                serviceName: "Hatena Blog",
                description: "Mainly filled with my CTF writeups.",
                href: "https://verliezer93764.hatenablog.jp/",
                bgColor: "#606060",
                addition: "",
            },
        ];
        return (
            <div>
                <h1>Links</h1>
                <p>Websites which discribe my activities. Most of my contents are written in Japanese.</p>
                <div className="links-container">
                    {linksBoxConstants.map((linksBoxConstant) => {
                        return (
                            <LinksBox bgColor={linksBoxConstant.bgColor} key={linksBoxConstant.serviceName}>
                                <h2>{linksBoxConstant.serviceName}</h2>
                                <p>{linksBoxConstant.description}</p>
                                <p>{linksBoxConstant.addition}</p>
                                <LinksButton href={linksBoxConstant.href} key={linksBoxConstant.serviceName} value={"Move to " + linksBoxConstant.serviceName} />
                            </LinksBox>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Links;