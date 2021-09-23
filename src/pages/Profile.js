import { Container, makeStyles } from "@material-ui/core";
import { Avatar, Typography, TextField, Grid, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useStylesProfile = makeStyles({
  wrapper: {
    margin: "auto",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    maxWidth: "30rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: "#263238",
  },
  login: {
    margin: 15,
  },
});

const Profile = () => {
  const classes = useStylesProfile();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
      <Typography className={classes.login} variant="h4">
        Manage Profile
      </Typography>

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="email"
              variant="outlined"
              type="text"
              fullWidth
              required
              value={currentUser?.email}
              // onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              type="text"
              fullWidth
              required
              value={currentUser?.username}
              // onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Profile;
