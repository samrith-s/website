import { motion } from 'framer-motion';
import styled from 'styled-components';

import IntroSprite from '../../public/sprites/intro.png';
import { SceneContainer } from '../../styles/containers';
import { padding, margin, color, borderRadius } from '../../styles/helpers';
import { UpInOut, DownInOut } from '../animations/entryExit';
import { Sprite } from '../helpers/Sprite';
import { useScene } from '../hooks/useScene';
import { SCENES } from '../variables';

const IntroContainer = styled(SceneContainer)`
    max-width: 550px;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    text-align: center;
    ${padding(0, 1)}
`;

const IntroStartText = styled(motion.p)`
    ${margin(3.5, 0)}
    ${padding(1, 2)}
    background: ${color('success')};
    color: ${color('base')};
    ${borderRadius(1)}
`;

export const Intro: React.FC = () => {
    useScene(SCENES.ABOUT, (e) => {
        return e.code === 'Space';
    });

    return (
        <IntroContainer
            key={0}
            {...DownInOut({
                enter: {
                    when: 'beforeChildren',
                    staggerChildren: 0.25,
                },
                exit: {
                    when: 'beforeChildren',
                    staggerChildren: 0.25,
                },
            }).all}
        >
            <motion.h1 key={1} {...UpInOut().variants}>
                Samrith Shankar
            </motion.h1>
            <motion.p key={2} {...UpInOut().variants}>
                Fullstack developer from Bombay (🇮🇳) living in Paris (🇫🇷).
            </motion.p>
            <IntroStartText key={3} {...DownInOut().variants}>
                Press "Space" to explore
            </IntroStartText>
            <motion.div key={4} {...DownInOut().variants}>
                <Sprite src={IntroSprite} width={102} height={241} frames={2} />
            </motion.div>
        </IntroContainer>
    );
};
