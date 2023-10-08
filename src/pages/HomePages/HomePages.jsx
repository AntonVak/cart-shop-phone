import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";

import { styles } from "./HomePagesStyle";

const HomePages = () => {
  
  return (
    <Container maxWidth="lg" component="main">
      <Typography variant="h4" component="h1" align="center">
        <Home/>
      </Typography>

      <Link to="/">
        <Button variant="contained" sx={styles.button}>
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default HomePages;
