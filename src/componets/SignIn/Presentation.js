import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 20,
  },
  sLink: {
    textAlign: "center",
    marginLeft: 90,
    textDecoration: "none",
  },
  forget: {
    marginLeft: 275,
    textDecoration: "none",
  },
  bottom: {
    position: "absolute",
    bottom: 100,
    right: 720,
  },
}));

function Presentation() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div id="SignIn" className={classes.div}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <div className={classes.paper}>
              <Avatar className={classes.avatar}>S</Avatar>
              <Typography component="h1" variant="h4">
                Log in
              </Typography>
              <br />
              {/* <Grid item xs={12}>
                <Avatar>S</Avatar>
              </Grid> */}
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <br />
                    <br></br>
                    <Grid item>
                      <NavLink
                        to="/forget"
                        className={classes.forget}
                        variant="body2"
                      >
                        forget Password?
                      </NavLink>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Log In
                  </Button>
                </Grid>
                <Grid item>
                  <NavLink
                    className={classes.sLink}
                    to="/SignUp"
                    variant="body2"
                  >
                    Don't have an account? Sign up
                  </NavLink>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
