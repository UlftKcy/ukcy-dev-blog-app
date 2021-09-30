import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteHandler, useFetch } from "../utils/functions";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Button,
  IconButton,
  Box,
  CircularProgress,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const BlogDetail = () => {
  const history = useHistory();
  const { blogCardList, isLoading } = useFetch();
  const { currentUser, blogDetail, setBlogDetail } = useContext(AuthContext);
  const { blogId } = useParams();

  useEffect(() => {
    for (const id in blogCardList) {
      if (blogCardList[id].id == blogId) {
        setBlogDetail(blogCardList[id]);
      }
    }
  }, [blogCardList]);

  const updateBlogDetail = () => {
    history.push(`/updateBlog/${blogId}`);
  };

  const deleteBlogHandler = () => {
    deleteHandler(blogId);
    history.push("/");
  };

  return (
    <Grid
      style={{ paddingTop: 50, paddingBottom: 30 }}
      sx={{ flexGrow: 1 }}
      container
    >
      {isLoading ? (
        <Grid item container justifyContent="space-around">
          <Typography>
            <Box
              style={{
                marginTop: "100px",
              }}
            >
              <CircularProgress />
            </Box>
          </Typography>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Grid container justifyContent="space-around">
            <Typography variant="h3" color="secondary" component="div">
              <Box sx={{ fontFamily: "Monospace", m: 3 }}>DETAILS</Box>
            </Typography>
            <Grid item>
              <Card
                style={{
                  width: "70%",
                  height: "100%",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  style={{
                    backgroundImage:
                      "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
                  }}
                  title={blogDetail?.title}
                  subheader={blogDetail?.date}
                />
                <CardMedia
                  component="img"
                  image={blogDetail?.image}
                  alt={blogDetail?.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {blogDetail?.content}
                  </Typography>
                </CardContent>
                <CardContent
                  style={{
                    display: "flex",
                    fontSize: "1rem",
                    marginBottom: 10,
                  }}
                >
                  {currentUser ? <AccountCircleIcon /> : ""}
                  {blogDetail?.author}
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <ModeCommentOutlinedIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            {currentUser?.email === blogDetail?.author ? (
              <Box sx={{ mt: 5 }}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  endIcon={<UpdateIcon />}
                  onClick={updateBlogDetail}
                >
                  Update
                </Button>

                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={deleteBlogHandler}
                >
                  Delete
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default BlogDetail;
