import { Helmet } from "react-helmet-async";

function SEO() {
    return (
        <Helmet>

            <title>
                Aaris | Frontend Developer
            </title>

            <meta
                name="description"
                content="Frontend Developer specializing in React, Vite, Bootstrap and modern responsive web applications."
            />

            <meta
                name="keywords"
                content="Frontend Developer, React Developer, Web Designer, Bootstrap, Vite, JavaScript, Portfolio"
            />

            <meta
                name="author"
                content="Aaris"
            />

            <meta
                property="og:title"
                content="Aaris | Frontend Developer"
            />

            <meta
                property="og:description"
                content="Frontend Developer specializing in modern React applications."
            />

            <meta
                property="og:type"
                content="website"
            />

        </Helmet>
    );
}

export default SEO;