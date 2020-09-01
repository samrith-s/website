import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Intro } from '../game/controllers/scenes/Intro.scene';
import { GlobalStyle } from '../styles';
import { theme } from '../styles/theme';

const Home: React.FC = () => {
    const router = useRouter();
    const { scene: urlScene } = router.query;
    const [scene, setScene] = useState(urlScene);

    useEffect(() => {
        if (!scene) {
            setScene('intro');
            router.replace(`/?scene=intro`, `/?scene=intro`, {
                shallow: true,
            });
        }
    }, [scene, router]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Intro />
        </ThemeProvider>
    );
};

export default Home;
