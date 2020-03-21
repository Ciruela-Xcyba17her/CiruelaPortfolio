import React from "react";
import Aboutme from "../components/contents/aboutme";

import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

export default () => (
    <Layout>
        <SEO title="CiruelaPortfolio - About me" />
        <Aboutme />
    </Layout>
);