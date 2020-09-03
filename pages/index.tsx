import { AnimatePresence } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Backdrop } from '../game/assets/Backdrop';
import { GameContext } from '../game/context';
import { SceneFactory } from '../game/scenes/_factory';
import { SCENES } from '../game/variables';
import { GlobalStyle } from '../styles';
import { theme } from '../styles/theme';

export interface HomeProps {
    scene?: string;
}

const Home: React.FC<HomeProps> = ({ scene: urlScene = SCENES.INTRO }) => {
    const router = useRouter();
    const [scene, setScene] = useState(urlScene);

    useEffect(() => {
        if (!scene || !window.location.search.includes('scene=')) {
            setScene(SCENES.INTRO);
            router.replace(`/?scene=${SCENES.INTRO}`, `/?scene=${SCENES.INTRO}`, {
                shallow: true,
            });
        }
    }, [scene, router]);

    return (
        <ThemeProvider theme={theme}>
            <GameContext.Provider
                value={{
                    scene,
                    setScene,
                }}
            >
                <GlobalStyle />
                <Backdrop>
                    <AnimatePresence>
                        {SceneFactory.map(({ Component, key }) =>
                            key === scene ? <Component key={key} /> : null
                        )}
                    </AnimatePresence>
                </Backdrop>
            </GameContext.Provider>
        </ThemeProvider>
    );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
    const {
        query: { scene = SCENES.INTRO },
    } = context;
    return {
        props: {
            scene: scene as string,
        },
    };
};

export default Home;
