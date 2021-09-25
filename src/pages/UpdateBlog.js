import { useState , useContext} from "react";
import { useHistory } from "react-router";
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
import { editHandler } from "../functions/functions";
import { AuthContext } from "../context/AuthContext";

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

const UpdateBlog = () => {
  const { selectedCard } = useContext(AuthContext)
  const [title, setTitle] = useState(selectedCard.title);
  const [image, setImage] = useState(selectedCard.image);
  const [content, setContent] = useState(selectedCard.content);
  
  const history = useHistory();
  const classes = useStylesBlog();

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = selectedCard.id;
    const newCard = {id,title, image, content };
    history.goBack();
    editHandler(newCard);
    console.log(newCard)
  };
  return (
    <Container className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <AddCircleOutlineOutlinedIcon />
      </Avatar>
      <Typography variant="h4" className={classes.newblog}>
        Update Blog
      </Typography>

      <form onSubmit={handleUpdate}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default UpdateBlog;
