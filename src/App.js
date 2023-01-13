import {StyledEngineProvider, ThemeProvider} from "@mui/material";

import theme from "./MUI/theme";
import Main from "./components";
import './App.module.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <Main/>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default App;
