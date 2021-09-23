import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import { Link } from "react-router-dom";
import {deleteHandler} from "../functions/functions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const BlogDetail = () => {
  const { selectedCard , currentUser} = useContext(AuthContext);
  const { id,title, image, content } = selectedCard;
  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={8}>
          <Typography variant="h3" color="secondary" component="div">
            <Box sx={{ fontFamily: "Monospace", m: 3 }}>DETAILS</Box>
          </Typography>

          <Grid item>
            <Card
              fluid
              style={{
                width: "70%",
                height: "100%",
                margin: "auto",
                backgroundColor: "#ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia component="img" alt="image" image={image} />
              <CardContent
                style={{
                  backgroundColor: "#ffff",
                }}
              >
                <Typography
                  color="primary"
                  gutterBottom
                  variant="h4"
                  component="div"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content}
                </Typography>
              </CardContent>
              <CardContent
                      style={{
                        display: "flex",
                        fontSize:20,
                        marginBottom:10
                      }}
                    >
                        <AccountCircleIcon/>{currentUser?.email}
                    </CardContent>
              <CardActions>
                <Button size="small">
                  <FavoriteBorderOutlinedIcon />
                </Button>
                <Button size="small">
                  <ModeCommentOutlinedIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Box sx={{ m: 3 }}>
            <Link to="/updateBlog">
              <Button
                size="large"
                color="primary"
                variant="contained"
                endIcon={<UpdateIcon />}
              >
                Update
              </Button>
            </Link>
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick = {()=>deleteHandler(id)}
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BlogDetail;
