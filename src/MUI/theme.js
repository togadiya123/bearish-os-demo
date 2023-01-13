import {createTheme} from "@mui/material";

import components from "./components";
import typography from "./typography";

const theme = createTheme({
    palette: {
        primary: {
            light: 'rgba(122,90,248,0.20)',
            main: '#FFFFFF',
            dark: '#6941c6',
        },
        secondary: {
            light: 'rgba(232,232,232,0.6)',
            main: '#5EE2A050',
            dark: '#344054',
        },
        background: {
            secondary: '#f9fafb',
        },
        text: {
            primary: '#344054',
            secondary: '#344054',
        },
    },
    components,
    typography,
});

export default theme;
