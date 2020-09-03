import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { useScene } from '../hooks/useScene';
import { SCENES } from '../variables';

const variants: Variants = {
    enter: {
        y: '0',
        opacity: 1,
    },
    exit: {
        y: '-80vh',
        opacity: 0,
    },
};

const AboutContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
`;

export const About: React.FC = () => {
    useScene(SCENES.INTRO, (e) => {
        return (e as KeyboardEvent).code === 'Space';
    });

    return (
        <AboutContainer>
            <motion.div key="txt" variants={variants} initial="exit" animate="enter" exit="exit">
                This is the about scene!{' '}
            </motion.div>
        </AboutContainer>
    );
};
