import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { color } from './helpers';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html, body {
        width: 100%;
        height: 100%;
        background: ${color('base')};
        color: ${color('light')};
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
        line-height: 1.45;
    }

    #__next {
        overflow: hidden;
        min-height: 100%;
    }

    * {
        box-sizing: border-box;
    }
`;
