import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import CloudsSprite from '../../public/sprites/clouds.png';
import { lighten, padding, color } from '../../styles/helpers';
import { GameContext, SceneContext } from '../context';
import { Player } from '../controllers/Player';
import { Scroller } from '../helpers/Scroller';

const Container = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    align-items: stretch;
    grid-template-columns: 100vw;
    grid-template-rows: 80vh 20vh;
    justify-items: stretch;
`;

const ScrollerContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const Scene = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    width: 100%;
    height: calc(100% + 50px);
    overflow-x: auto;
    overflow-y: hidden;
    ${padding(30, 0, 5)}
    scroll-behavior: smooth;
`;

const SceneScrollHide = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    background: ${color('base')};
`;

const Ground = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    height: 100%;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    ${padding(1)}
    background: ${lighten('base', 0.05)};
    color: ${lighten('base', 0.25)};
    font-size: 0.8rem;
`;

export const Backdrop: React.FC = ({ children }) => {
    const { SceneRef } = useContext(SceneContext);
    const { isIntro } = useContext(GameContext);

    useEffect(() => {
        const scene = SceneRef.current as HTMLDivElement;
        const preventDefault = (e: Event) => e.preventDefault();

        const preventKeyboardDefault = (e: KeyboardEvent) => {
            if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                e.preventDefault();
            }
        };

        if (scene) {
            scene.addEventListener('wheel', preventDefault, true);
            scene.addEventListener('scroll', preventDefault, true);
            scene.addEventListener('touchmove', preventDefault, true);
            scene.addEventListener('keydown', preventKeyboardDefault, true);
        }

        return () => {
            if (scene) {
                scene.removeEventListener('wheel', preventDefault, true);
                scene.removeEventListener('scroll', preventDefault, true);
                scene.removeEventListener('touchmove', preventDefault, true);
                scene.removeEventListener('keydown', preventKeyboardDefault, true);
            }
        };
    }, [SceneRef]);

    return (
        <Container>
            <ScrollerContainer>
                <Scroller src={CloudsSprite} height="30vh" width="100vw" />
                <Scene ref={SceneRef} onScroll={(e) => e.preventDefault()}>
                    <AnimatePresence>{children}</AnimatePresence>
                    <SceneScrollHide />
                </Scene>
                <AnimatePresence>{!isIntro && <Player key="player" />}</AnimatePresence>
            </ScrollerContainer>
            <Ground>
                <p>Samrith Shankar (c) {new Date().getFullYear()}.</p>
            </Ground>
        </Container>
    );
};
