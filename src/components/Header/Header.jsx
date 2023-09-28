import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styles } from "./HeaderStyle";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.header}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/home'}>Home</Link>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/posts"}>Posts</Link>
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/cart"}>Cart</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
