// import React from "react";
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import { logOut } from "../helpers/firebase";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { currentUser } = useContext(AuthContext);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand text-white">
//             <h4>Fireblog App</h4>
//           </Link>
//           <div className="d-flex text-white align-items-center ">
//             {currentUser ? (
//               <>
//                 <h5 className="mb-0 text-capitalize">
//                   {currentUser.displayName}
//                 </h5>
//                 <button
//                   className="ms-2 btn btn-outline-light"
//                   onClick={() => navigate("/profile")}
//                 >
//                   Profile
//                 </button>
//                 <button
//                   className="ms-2 btn btn-outline-light"
//                   onClick={() => navigate("/new-blog")}
//                 >
//                   New Blog
//                 </button>
//                 <button
//                   className="ms-2 btn btn-outline-light"
//                   onClick={() => logOut()}
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button
//                   className="ms-2 btn btn-outline-light"
//                   onClick={() => navigate("/login")}
//                 >
//                   Login
//                 </button>

//                 <button
//                   className="ms-2 btn btn-outline-light"
//                   onClick={() => navigate("/register")}
//                 >
//                   Register
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../assets/cw.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

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
              fontSize: 30,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            ─── Fire Blog ───
          </Button>
          {auth && (
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
                      <MenuItem
                        onClick={() => navigate("/profile")}
                        // onClick={handleClose}
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigate("/new-blog")}
                        // onClick={handleClose}
                      >
                        New Blog
                      </MenuItem>
                      <MenuItem
                        onClick={() => logOut()}
                        // onClick={handleClose}
                      >
                        Logout
                      </MenuItem>
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
