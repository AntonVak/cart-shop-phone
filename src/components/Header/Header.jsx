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
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.header}>
        <Toolbar sx={styles.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
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
            <Link to={"/cart"}>
              <ShoppingCart sx={{ ml: 5, color: green[600] }} />
              <StyledSpan>2</StyledSpan>
            </Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
