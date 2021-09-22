import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStylesHeader = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container: {
    maxWidth: "30rem",
    height: "20rem",
    color: "#ffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "8rem",
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
  link: {
    cursor: "pointer",
  },
  icon: {
    fontSize: "2rem",
    color: "black",
    marginRight: 5,
  },
});
const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();
  const classes = useStylesHeader();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Paper className={classes.paperContainer}></Paper>
        <Typography variant="h2">
          <Box sx={{ fontFamily: "Monospace", color: "#f44336" }} mb={5}>
            Create Your Blog Page
          </Box>
        </Typography>
        <Typography variant="h6">
          <Box mb={5} sx={{ color: "#263238" }}>
            Create | Read | Update | Delete
          </Box>
        </Typography>

        <Button
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
    </Box>
  );
};
export default Header;
