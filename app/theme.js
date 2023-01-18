'use client'

import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
          main: '#ff1745',
        },
        secondary: {
          main: '#f06292',
        },
        neutral: {
            main: '#212121',
            contrastText: '#fff',
        },
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
});
export default theme;