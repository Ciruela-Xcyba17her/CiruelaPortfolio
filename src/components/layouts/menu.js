import React from "react";
import { Link } from "gatsby"
import "./menu.css"

class Menu extends React.Component {
    render() {
        const menuLinkList = [
            { "name": "Top", "link": "/" },
            { "name": "Skills", "link": "/skills" },
            { "name": "Diary", "link": "/diary" },
            { "name": "Links", "link": "/links" },
        ];

        return (
            <>
                <div className="menu">
                    <div className="menu-top">
                        CiruelaPortfolio
                    </div>
                    <div className="menu-link">
                        <ul>
                            {menuLinkList.map((menuLink, index) => {
                                return (
                                    <Link to={menuLink.link} key={index} style={{
                                        textDecoration: 'none',
                                    }}>
                                        <li>{menuLink.name}</li>
                                    </Link>
                                )
                            })}
                        </ul >
                    </div>
                </div>

                <div className="menu-transparent">
                    <div className="menu-top">
                        CiruelaPortfolio
                    </div>
                    <div className="menu-link">
                        <ul>
                            {menuLinkList.map((menuLink) => {
                                return (
                                    <Link to={menuLink.link} key={menuLink.name} style={{
                                        textDecoration: 'none',
                                    }}>
                                        <li>{menuLink.name}</li>
                                    </Link>
                                )
                            })}
                        </ul >
                    </div>
                </div>
            </>
        );
    }
}

export default Menu