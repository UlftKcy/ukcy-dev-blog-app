import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Container, Link } from "@material-ui/core";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "../functions/firebase";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  bar: {
    backgroundColor: "#263238",
    color: "#ffff",
    padding: 3,
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  signBtn: {
    color: "#ffff",
    marginRight: 6,
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#ffff",
      color: "#f44336",
    },
  },
});

export default function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  return (
    <Container className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link
              color="inherit"
              underline="none"
              onClick={() => history.push("/")}
            >
              Blog
            </Link>
          </Typography>
          {currentUser ? (
            <ButtonGroup>
              <Button
                color="primary"
                className={classes.signBtn}
                onClick={() => history.push("/profile")}
              >
                Profile
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.signBtn}
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button
                color="primary"
                className={classes.signBtn}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.signBtn}
                onClick={() => history.push("/register")}
              >
                Register
              </Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
