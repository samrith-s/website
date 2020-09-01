import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import IntroSprite from '../../../public/sprites/intro.png';
import { padding, margin, color, borderRadius } from '../../../styles/helpers';
import { UpInOut, DownInOut } from '../../animations/entryExit';
import { Backdrop } from '../../assets/Backdrop';
import { Sprite } from '../../helpers/Sprite';

const IntroContainer = styled.div`
    display: flex;
    overflow: hidden;
    max-width: 550px;
    height: 100%;
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
    return (
        <Backdrop>
            <IntroContainer>
                <AnimatePresence>
                    <motion.h1 key="heading" {...UpInOut}>
                        Samrith Shankar
                    </motion.h1>
                    <motion.p key="subheading" {...UpInOut}>
                        Fullstack developer from Bombay (🇮🇳) living in Paris (🇫🇷).
                    </motion.p>
                    <IntroStartText key="message" {...DownInOut}>
                        Press "Space" to explore
                    </IntroStartText>
                    <motion.div key="sprite" {...DownInOut}>
                        <Sprite src={IntroSprite} width={102} height={241} frames={2} />
                    </motion.div>
                </AnimatePresence>
            </IntroContainer>
        </Backdrop>
    );
};
