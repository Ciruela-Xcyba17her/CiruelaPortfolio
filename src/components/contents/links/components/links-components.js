import React from "react";
import "./links.css";

const LinksBox = (props) => {
    return (
        <div className="links-box" style={{ backgroundColor: props.bgColor }}>
            {props.children}
        </div>
    );
};

class LinksButton extends React.Component {
    render() {
        return (
            <div className="links-button">
                <a href={this.props.href}>{this.props.value}</a>
            </div>
        );
    };
}

export { LinksButton, LinksBox };