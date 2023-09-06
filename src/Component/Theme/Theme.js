import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0FCFEC',
            contrastText: '#fff'
        },
        secondary: {
            main: '#19D3AE',
            light: '#90FFE2',
           
            contrastText: '#fff',
        },
        thirdly: {
            light:'#f5f5f5',
            main: '#3A4256',
            contrastText: '#fff',
        },
        fourthly: {
            main: '#f5f5f5',
            dark: '#eceff1',
            contrastText: '#3A4256'
        }

    }
})

export default theme