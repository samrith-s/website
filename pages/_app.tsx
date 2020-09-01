import { NextSeo } from 'next-seo';

const Portfolio: React.FC<{ Component: React.ComponentType; pageProps: any }> = ({
    Component,
    pageProps,
}) => {
    return (
        <>
            <NextSeo
                title="Samrith Shankar"
                description="Fullstack developer from Bombay working in Paris."
            />
            <Component {...pageProps} />
        </>
    );
};

export default Portfolio;
