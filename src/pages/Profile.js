import { Container, makeStyles } from "@material-ui/core";
import { Avatar, Typography, TextField, Grid, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useContext } from "react";
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
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // updateProfile(currentUser.email,currentUser.displayName)
  };

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
      <Typography className={classes.login} variant="h4">
        Manage Profile
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
              value={currentUser?.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              type="text"
              fullWidth
              required
              placeholder="userName(optional)"
              value={currentUser?.displayName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleProfileSubmit}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Profile;
