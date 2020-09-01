import { ThemeProvider } from 'styled-components';

import { Intro } from '../game/controllers/scenes/Intro.scene';
import { GlobalStyle } from '../styles';
import { theme } from '../styles/theme';

const Home: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Intro />
        </ThemeProvider>
    );
};

export default Home;
