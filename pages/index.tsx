import { AnimatePresence } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { UpInOut } from '../game/animations/entryExit';
import { Backdrop } from '../game/assets/Backdrop';
import { GameContext, SceneContext } from '../game/context';
import { SceneRef, IndividualSceneRefs } from '../game/context/refs';
import { SceneFactory, PrimaryScene } from '../game/scenes/_factory';
import { SCENES } from '../game/variables';
import { GlobalStyle } from '../styles';
import { PrimarySceneWrapper, SecondarySceneWrapper } from '../styles/containers';
import { theme } from '../styles/theme';

export interface HomeProps {
    scene?: string;
}

const Home: React.FC<HomeProps> = ({ scene: urlScene = SCENES.INTRO }) => {
    const router = useRouter();
    const [isIntro, setIsIntro] = useState(urlScene === SCENES.INTRO);

    useEffect(() => {
        if (!window.location.search.includes('scene=')) {
            setIsIntro(true);
            router.replace(`/?scene=${SCENES.INTRO}`, `/?scene=${SCENES.INTRO}`, {
                shallow: true,
            });
        }
    }, [isIntro, router]);

    return (
        <ThemeProvider theme={theme}>
            <SceneContext.Provider
                value={{
                    SceneRef,
                    IndividualSceneRefs,
                }}
            >
                <GameContext.Provider
                    value={{
                        isIntro,
                        setIsIntro,
                    }}
                >
                    <GlobalStyle />
                    <Backdrop>
                        <AnimatePresence exitBeforeEnter>
                            {isIntro && (
                                <PrimarySceneWrapper key="primary-scene">
                                    <PrimaryScene.Component key={PrimaryScene.key} />
                                </PrimarySceneWrapper>
                            )}
                            {!isIntro && (
                                <SecondarySceneWrapper
                                    key="secondary-scene"
                                    {...UpInOut({
                                        enter: {
                                            when: 'beforeChildren',
                                            staggerChildren: 0.4,
                                        },
                                        exit: {
                                            when: 'afterChilren',
                                            staggerChildren: 0.4,
                                        },
                                    }).all}
                                >
                                    {SceneFactory.map(({ Component, key }) => (
                                        <Component key={key} ref={IndividualSceneRefs[key]} />
                                    ))}
                                </SecondarySceneWrapper>
                            )}
                        </AnimatePresence>
                    </Backdrop>
                </GameContext.Provider>
            </SceneContext.Provider>
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
