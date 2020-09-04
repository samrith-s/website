import { memo, forwardRef } from 'react';
import styled from 'styled-components';

import { SceneContainer } from '../../styles/containers';
import { DownInOut } from '../animations/entryExit';
import { useRouteChange } from '../hooks/useRouteChange';
import { useScene } from '../hooks/useScene';
import { useScroll } from '../hooks/useScroll';
import { SCENES } from '../variables';

const AboutContainer = styled(SceneContainer)`
    display: grid;
    grid-auto-columns: 232px;
    grid-auto-flow: column;
    grid-template-rows: auto;
`;

const randomGrids = new Array(10).fill(1);

export const About = memo(
    forwardRef((_, ref) => {
        useScene(SCENES.INTRO, (e) => {
            return (e as KeyboardEvent).code === 'Space';
        });
        useScroll(SCENES.ABOUT);
        useRouteChange(SCENES.ABOUT);

        return (
            <AboutContainer {...DownInOut().all} ref={ref}>
                {randomGrids.map((grid, index) => (
                    <div
                        key={index}
                        style={{
                            background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                            height: '100%',
                            opacity: 0.75,
                        }}
                    >
                        Grid {index}
                    </div>
                ))}
            </AboutContainer>
        );
    })
);
