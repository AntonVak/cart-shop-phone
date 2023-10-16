import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import { StyledLink, StyledSpan, styles } from "./HeaderStyle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box >
      <AppBar position="static" sx={styles.header}>
        <Toolbar sx={styles.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.icon}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" component="div" sx={styles.link}>
            <StyledLink to={"/home"}>Home</StyledLink>
            <StyledLink to={"/posts"}>Posts</StyledLink>
            <StyledLink to={"/add"}>Add Posts</StyledLink>
            <StyledLink to={"/cart"}>Cart</StyledLink>
          </Typography>
          <Typography component="div" sx={styles.cartIcon} >
            <Link to={"/cart"} sx={styles.linkIconCart}>
              <ShoppingCart sx={styles.cart} />
              
            </Link>
            <StyledSpan>2</StyledSpan>
          </Typography>

          <Button sx={styles.btnLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
