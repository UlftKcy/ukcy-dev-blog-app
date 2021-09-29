import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStylesHeader = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: "40rem",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
  },
  paperContainer: {
    backgroundImage: `url(${"images/header-bgImg.jpg"})`,
    height: "100%",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "-1",
  },
  heading: {
    color: "#fff9c4",
    fontWeight: "700",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  subcontent: {
    color: "#fffde7",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  link: {
    cursor: "pointer",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#000",
    marginRight: 5,
  },
}));
const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();
  const classes = useStylesHeader();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paperContainer}></Paper>
      <Box className={classes.container}>
        <Typography className={classes.heading} variant="h2">
          Create Your Blog Page
        </Typography>
        <Typography className={classes.subcontent} variant="h6">
          <Box>Create | Read | Update | Delete</Box>
        </Typography>

        <Button
          style={{
            width: "50%",
          }}
          onClick={() =>
            currentUser ? history.push("/newblog") : history.push("/login")
          }
          variant="contained"
          color="primary"
        >
          Add Blog
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            padding: "20px 0",
          }}
        >
          <Link
            href="https://www.linkedin.com/in/%C3%BClfet-kacay/"
            target="_blank"
            className={classes.link}
          >
            <LinkedInIcon className={classes.icon} />
          </Link>
          <Link
            href="https://github.com/UlftKcy"
            target="_blank"
            className={classes.link}
          >
            <GitHubIcon className={classes.icon} />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default Header;
