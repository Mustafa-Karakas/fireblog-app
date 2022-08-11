import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../assets/cw.jpeg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="cw-logo" className="cw-logo" />
          <Button
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontFamily: "Girassol",
              fontSize: {
                xs: 15,
                md: 20,
                lg: 30,
              },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            ─── Fire Blog ───
          </Button>
          {/* {auth && ( */}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div>
                {currentUser ? (
                  <>
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/new-blog")}>
                      New Blog
                    </MenuItem>
                    <MenuItem onClick={() => logOut()}>Logout</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => navigate("/login")}>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/register")}>
                      Register
                    </MenuItem>
                  </>
                )}
              </div>
            </Menu>
          </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
