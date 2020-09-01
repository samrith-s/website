import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { color } from './helpers';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    ${normalize}

    html, body {
        width: 100%;
        height: 100%;
        background: ${color('base')};
        color: ${color('font')};
    }

    #__next {
        min-height: 100%;
    }

    * {
        box-sizing: border-box;
    }
`;
