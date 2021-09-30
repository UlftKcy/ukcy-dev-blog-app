import { Container, makeStyles } from "@material-ui/core";
import { Avatar, Typography, TextField, Grid, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const useStylesProfile = makeStyles({
  wrapper: {
    maxWidth: "30rem",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: "#263238",
  },
  login: {
    marginBottom: 20,
  },
});

const Profile = () => {
  const classes = useStylesProfile();
  const { currentUser } = useContext(AuthContext);
  const innitialStates = {
    username: currentUser?.displayName,
    email: currentUser?.email,
  };
  const [currentProfile, setCurrentProfile] = useState(innitialStates);

  useEffect(() => {
    setCurrentProfile(innitialStates);
  }, [innitialStates]);

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
      <Typography className={classes.login} variant="h4">
        Your Profile
      </Typography>

      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="email"
              variant="outlined"
              type="text"
              fullWidth
              required
              placeholder="Email"
              value={currentProfile.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              type="text"
              fullWidth
              required
              placeholder="userName"
              value={currentProfile.username}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Profile;
