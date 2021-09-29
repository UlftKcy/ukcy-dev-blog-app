import { useState, useContext } from "react";
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
import { editHandler } from "../utils/functions";
import { AuthContext } from "../context/AuthContext";

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

const UpdateBlog = () => {
  const { selectedCard } = useContext(AuthContext);

  const [updateBlog,setUpdateBlog] = useState({
    id:selectedCard.id,
    title:selectedCard.title,
    image:selectedCard.image,
    content:selectedCard.content,
  })
  const history = useHistory();
  const classes = useStylesBlog();

  const handleChangeBlog = (e) => {
    const { name, value } = e.target;
    setUpdateBlog({ ...updateBlog, [name]: value })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    editHandler(updateBlog);
    history.goBack();
    console.log(updateBlog)
  };
  return (
    <Container className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <AddCircleOutlineOutlinedIcon />
      </Avatar>
      <Typography variant="h4" className={classes.newblog}>
        Update Blog
      </Typography>

      
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              value={updateBlog?.title}
              onChange={handleChangeBlog}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="image"
              id="outlined-basic"
              label="Image"
              variant="outlined"
              fullWidth
              value={updateBlog?.image}
              onChange={handleChangeBlog}
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
              value={updateBlog?.content}
              onChange={handleChangeBlog}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            onClick={handleUpdate}
            type="submit" variant="contained" color="primary" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
     
    </Container>
  );
};
export default UpdateBlog;
