import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  papers: {
    height: 500,
    width: 500,
    backgroundColor: "red",
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
}));

function Presentation() {
  const classes = useStyles();
  return (
    <div>
      <div id="forget">
        <Container component="main" maxWidth="xs">
          <paper className={classes.papers} elevation={5}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>S</Avatar>
              <Typography component="h1" variant="h4">
                Forget password
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="email"
                      name="email"
                      variant="standard"
                      required
                      fullWidth
                      id="email"
                      label="Emali Address"
                      autoFocus
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Get OTP
                  </Button>
                </Grid>
              </form>
            </div>
          </paper>
        </Container>
      </div>
    </div>
  );
}

export default Presentation;
