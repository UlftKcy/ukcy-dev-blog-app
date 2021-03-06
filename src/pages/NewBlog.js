import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { addCard } from "../utils/functions";
import { successToastify } from "../utils/customToastify";
import {
  Grid,
  TextField,
  Container,
  Typography,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const useStylesBlog = makeStyles((theme) => ({
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
    backgroundColor: theme.palette.primary.main,
  },
  newblog: {
    marginBottom: 20,
  },
}));

const NewBlog = () => {
  const classes = useStylesBlog();
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [newBlog, setNewBlog] = useState({
    author: currentUser?.email,
    title: "",
    image: "",
    content: "",
    favorite_count: "",
    comment_count: "",
    date: new Date().toLocaleDateString(),
  });
  const handleNewBlog = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(newBlog);
    successToastify("Added successfully");
    history.push("/");
  };

  return (
    <Container className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <AddCircleOutlineOutlinedIcon />
      </Avatar>
      <Typography variant="h4" className={classes.newblog}>
        New Blog
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              required
              fullWidth
              value={newBlog.title}
              onChange={handleNewBlog}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              required
              fullWidth
              value={newBlog.image}
              onChange={handleNewBlog}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="content"
              id="filled-multiline-static"
              label="Content"
              multiline
              rows={4}
              variant="outlined"
              required
              fullWidth
              value={newBlog.content}
              onChange={handleNewBlog}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default NewBlog;
