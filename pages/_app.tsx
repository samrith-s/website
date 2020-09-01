import { NextSeo } from 'next-seo';

const title = 'Samrith Shankar - Fullstack Developer';
const description = 'Fullstack developer from Bombay (🇮🇳) working in Paris (🇫🇷).';
const url = 'https://samrith.dev/';

const Portfolio: React.FC<{ Component: React.ComponentType; pageProps: any }> = ({
    Component,
    pageProps,
}) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                    images: [
                        {
                            url:
                                'https://raw.githubusercontent.com/samrith-s/portfolio/master/public/samrith-shankar-opengraph.jpg',
                        },
                    ],
                }}
                twitter={{
                    handle: '@tueieo',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </>
    );
};

export default Portfolio;
