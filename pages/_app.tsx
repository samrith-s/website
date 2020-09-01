const MyApp: React.FC<{ Component: React.ComponentType; pageProps: any }> = ({
    Component,
    pageProps,
}) => {
    return <Component {...pageProps} />;
};

export default MyApp;
