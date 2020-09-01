import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles';
import { theme } from '../styles/theme';

const Home: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            This is the app!
        </ThemeProvider>
    );
};

export default Home;
