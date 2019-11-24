import React from "react";
import { Link } from "gatsby";

class Top extends React.Component {
    render() {
        return (
            <p>
                <h1>Hello, React!</h1>
                <p>Welcome to page Links.</p>
                <Link to="/">Go back to the homepage</Link>
            </p>
        );
    }
}

export default Top;