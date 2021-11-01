import React, { useState } from "react";
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

  const [firstName, setFirstName] = useState("");
  const [fistNameErr, setFistNameErr] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const handelFirstName = (e) => {
    e.preventDefault();
    let item = e.target.value;
    if (item.length < 5) {
      setFistNameErr(true);
    } else {
      setFistNameErr(false);
    }
    setFirstName(item);
  };
  const handelLastName = (e) => {
    e.preventDefault();
    let item = e.target.value;
    if (item.length < 5) {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
    setLastName(item);
  };
  const validateEmail = (e) => {
    let item = e.target.value;
    let res =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(item);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    const d = validateEmail(e);
    console.log(d);
    let item = e.target.value;
    if (!d) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    let item = e.target.value;
    if (item.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  };
  const handelSubmit = () => {
    if (
      firstName.length < 4 ||
      lastName.length < 4 ||
      email.length < 10 ||
      password.length < 8
    ) {
      alert("First fill the form");
    } else {
      alert("You Filled Succsefully");
    }
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <paper className={classes.papers} elevation={5}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>S</Avatar>
            <Typography component="h1" variant="h4">
              SignUp
            </Typography>
            <form className={classes.form} noValidate onSubmit={handelSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="standard"
                    required
                    fullWidth
                    id="firstName"
                    value={firstName}
                    label="First Name"
                    autoFocus
                    onChange={handelFirstName}
                  />
                  {fistNameErr ? <span>Enter first Name </span> : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    autoComplete="lastname"
                    onChange={handelLastName}
                  />
                  {lastNameErr ? <span>Enter Last Name </span> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                  />
                  {emailErr ? <span>Enter valid email </span> : null}
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
                    value={password}
                    autoComplete="current-password"
                    onChange={handlePassword}
                  />
                  {passwordErr ? (
                    <span>Enter password must have 8 chacters </span>
                  ) : null}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid item>
                <NavLink className={classes.sLink} to="/" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </form>
          </div>
        </paper>
      </Container>
    </div>
  );
}

export default Presentation;
