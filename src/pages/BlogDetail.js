import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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
import { deleteHandler, useFetch } from "../utils/functions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const BlogDetail = () => {
  const history = useHistory();
  const { isLoading } = useFetch();
  const { selectedCard,currentUser } = useContext(AuthContext);
  // const {id,author,title,image,content} = selectedCard;
  console.log(selectedCard)
  
  return (
    <Grid sx={{ flexGrow: 1 }} container>
      {isLoading ? (
        <Grid item container justifyContent="space-around">
          <Typography>
            <Box sx={{ display: "flex" }}>
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
                  title={selectedCard?.title}
                  subheader="September 24, 2021"
                />
                <CardMedia component="img" image={selectedCard?.image} alt={selectedCard?.title} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {selectedCard?.content}
                  </Typography>
                </CardContent>
                <CardContent
                  style={{
                    display: "flex",
                    fontSize: 20,
                    marginBottom: 10,
                  }}
                >
                  {currentUser ? <AccountCircleIcon /> : ""}
                  {selectedCard?.author}
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
            <Box sx={{ m: 3 }}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                endIcon={<UpdateIcon />}
                onClick={() => history.push(`/updateBlog/${selectedCard?.id}`)}
              >
                Update
              </Button>

              <Button
                size="large"
                color="secondary"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteHandler(selectedCard?.id)}
              >
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default BlogDetail;
