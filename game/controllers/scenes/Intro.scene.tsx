import styled from 'styled-components';

import IntroSprite from '../../../public/sprites/intro.png';
import { padding } from '../../../styles/helpers';
import { Backdrop } from '../../assets/Backdrop';
import { Sprite } from '../../helpers/Sprite';

const IntroContainer = styled.div`
    display: flex;
    max-width: 550px;
    height: 100%;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    text-align: center;
    ${padding(0, 1)}
`;

export const Intro: React.FC = () => {
    return (
        <Backdrop>
            <IntroContainer>
                <h1>Samrith Shankar</h1>
                <p>Fullstack developer from Bombay (🇮🇳) living in Paris (🇫🇷).</p>
                <Sprite src={IntroSprite} width={102} height={241} frames={2} />
            </IntroContainer>
        </Backdrop>
    );
};
