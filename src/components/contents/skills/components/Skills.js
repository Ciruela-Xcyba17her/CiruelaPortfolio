import React from "react";
import { Link } from "gatsby";

class Skills extends React.Component {
    render() {
        return (
            <p>
                <h1>Hello, React!</h1>
                <p>Welcome to page Skills.</p>
                <Link to="/">Go back to the homepage</Link>
            </p>
        );
    }
}

export default Skills;