import { createTheme } from "@mui/material";

import "./font.css"


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      background: {
        headerRow: '#BEB7A4',
      },
      color: {
        main: '#0052cc',
        text: '#f9dc5c',
      },
    },
    status: {
      warning: '#FF1B1C',
    },
    typography: {
        fontFamily: [
        //   'Sora',
          'Encode Sans' /* Имя первого шрифта */
          
          
        ].join(','),
        fontSize: 16,
        fontWeight: 600,
        
      },
      body1: {
        fontWeight: 700,
      },
     
  })

  export default theme;
  