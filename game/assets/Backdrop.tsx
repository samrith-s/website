import styled from 'styled-components';

import CloudsSprite from '../../public/sprites/clouds.png';
import { lighten, padding } from '../../styles/helpers';
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
    width: 100%;
    height: 100%;
`;

const Scene = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 20vh;
    left: 0;
    margin-top: auto;
`;

const Ground = styled.div`
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

export const Backdrop: React.FC = ({ children }) => (
    <Container>
        <ScrollerContainer>
            <Scroller src={CloudsSprite} height="30vh" />
            <Scene>{children}</Scene>
        </ScrollerContainer>
        <Ground>
            <p>Samrith Shankar (c) {new Date().getFullYear()}.</p>
        </Ground>
    </Container>
);
