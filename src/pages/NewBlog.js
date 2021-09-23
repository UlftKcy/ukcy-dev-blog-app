import { useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
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
import { addCard } from "../functions/functions";

const useStylesBlog = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    maxWidth: "30rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.primary.main,
  },
  newblog: {
    margin: "1rem",
  },
}));

const NewBlog = () => {
  const classes = useStylesBlog();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [content, setContent] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newCard = { id, title, image, content };
    history.push("/");
    addCard(newCard);
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
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              id="outlined-basic"
              label="Image"
              variant="outlined"
              fullWidth
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
              fullWidth
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
