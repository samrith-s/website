import { motion } from 'framer-motion';
import styled from 'styled-components';

import { padding } from './helpers';

export const SceneContainer = styled(motion.div)`
    position: relative;
    display: flex;
    width: max-content;
    height: 100%;
`;

export const PrimarySceneWrapper = styled(motion.div)`
    position: absolute;
    top: 300px;
    right: 0;
    bottom: 50px;
    left: 0;
`;

export const SecondarySceneWrapper = styled(motion.div)`
    position: absolute;
    top: 300px;
    right: 0;
    bottom: 50px;
    left: 0;
    display: flex;
    width: max-content;
    align-items: flex-end;

    ${SceneContainer} {
        ${padding(0, 15, 0, 0)}

        &:first-of-type {
            ${padding(0, 15, 0, 15)}
        }
    }
`;
