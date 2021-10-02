import { useContext, useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { editHandler, useFetch } from "../utils/functions";
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

const UpdateBlog = () => {
  const history = useHistory();
  const classes = useStylesBlog();
  const { blogCardList } = useFetch();
  const { currentUser } = useContext(AuthContext);

  const { blogId } = useParams();

  const [newBlog, setNewBlog] = useState({
    author: currentUser?.email,
    id: blogId,
    title: "",
    image: "",
    content: "",
    favorite_count: "",
    comment_count: "",
    date: new Date().toLocaleDateString(),
  });

  const res = useMemo(() => {
    for (let id in blogCardList) {
      if (blogCardList[id].id === blogId) {
        return blogCardList[id];
      }
    }
  }, [blogCardList, blogId]);

  useEffect(() => {
    setNewBlog(res);
  }, [res]);

  const handleChangeBlog = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editHandler(res?.id, newBlog);
    successToastify("Updated Successfully");
    history.goBack();
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
            variant="outlined"
            fullWidth
            value={newBlog?.title}
            onChange={handleChangeBlog}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="image"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={newBlog?.image}
            onChange={handleChangeBlog}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="content"
            id="filled-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={newBlog?.content}
            onChange={handleChangeBlog}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleUpdate}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default UpdateBlog;
