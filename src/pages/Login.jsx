import { useState } from "react";
import { signIn, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         signIn(email, password, navigate);
//     };
//     const handleProviderLogin = () => {
//         signUpProvider(navigate);
//     };

//     return (
//         <div className="d-flex justify-content-center">
//             <div className="form-image d-none d-md-block ">
//                 <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
//             </div>
//             <div className="register-form">
//                 <h1 className="form-title display-3 ">Login</h1>
//                 <form id="register" onSubmit={handleLogin}>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             placeholder="Enter your email adress.."
//                             required
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             placeholder="Enter your password.."
//                             required
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="link" onClick={() => forgotPassword(email)}>
//                         Forgot Password?
//                     </div>
//                     <input
//                         type="submit"
//                         className="btn btn-primary form-control"
//                         value="Login"
//                     />
//                 </form>
//                 <button
//                     className="btn btn-primary form-control"
//                     onClick={handleProviderLogin}
//                 >
//                     Continue with Google
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Login;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { signUpProvider } from "../helpers/firebase";

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              fontFamily={"Girassol"}
            >
              —— LOGIN ——
            </Typography>
            <Box
              component="form"
              noValidate
              //   onSubmit={handleSubmit}
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                LOGIN
              </Button>

              <Button
                variant="text"
                fullWidth
                onClick={() => signUpProvider(navigate)}
              >
                Continue with Google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
