import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";

import { styles } from "./HomePagesStyle";

const HomePages = () => {
  
  return (
    <Container maxWidth="lg" component="main">
      
      <Home/>
      <Link to="/">
        <Button variant="contained" sx={styles.button}>
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default HomePages;
