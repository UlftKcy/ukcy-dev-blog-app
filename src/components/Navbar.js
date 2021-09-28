import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Container, Link } from "@material-ui/core";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "../utils/firebase";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#263238",
    color: "#ffff",
    padding: 3,
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    marginRight: 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  signBtn: {
    color: "#ffff",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#ffff",
      color: "#f44336",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
}));

export default function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link
              color="inherit"
              underline="none"
              onClick={() => history.push("/")}
            >
              <code>{"<UlfetKacay/>"}</code>
            </Link>
          </Typography>
          {currentUser ? (
            <ButtonGroup>
              <Button
                color="primary"
                className={classes.signBtn}
                onClick={() => history.push("/profile")}
              >
                Profile <PersonOutlineIcon />
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
                Login <PersonOutlineIcon />
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
