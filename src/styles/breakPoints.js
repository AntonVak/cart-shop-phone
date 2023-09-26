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
    typography: {
        fontFamily: [
        //   'Sora',
          'Encode Sans' /* Имя первого шрифта */
          
          
        ].join(','),
        fontSize: 30,
        fontWeight: 600,
      },
     
  });

  export default theme;
  