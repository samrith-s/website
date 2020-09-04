import styled from 'styled-components';

import { SceneContainer } from '../../styles/containers';
import { DownInOut } from '../animations/entryExit';
import { useScene } from '../hooks/useScene';
import { SCENES } from '../variables';

const AboutContainer = styled(SceneContainer)`
    display: grid;
    width: max-content;
    align-items: flex-end;
    grid-auto-columns: 300px;
    grid-auto-flow: column;
    grid-template-rows: auto;
`;

const randomGrids = new Array(30).fill(1);

export const About: React.FC = () => {
    useScene(SCENES.INTRO, (e) => {
        return (e as KeyboardEvent).code === 'Space';
    });

    return (
        <AboutContainer {...DownInOut().all}>
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
};
