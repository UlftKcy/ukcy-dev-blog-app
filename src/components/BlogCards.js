import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
  CardActions,
  Button,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SendIcon from "@material-ui/icons/Send";

const BlogCards = ({ blog }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Grid item>
      <Card
        style={{
          maxWidth: 345,
          height: "100%",
          display: "grid",
        }}
      >
        <CardHeader
          style={{
            width: "100%",
            height: "15vh",
            backgroundImage:
              "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
          }}
          title={blog.title}
          subheader={blog.date}
        />
        <CardMedia
          style={{
            width: "100%",
            height: "30vh",
            objectFit: "cover",
          }}
          image={blog.image}
          component="img"
          alt={blog.title}
        />
        <CardContent
          style={{
            width: "100%",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant={"body2"}>
            {blog.content.length < 250
              ? blog.content
              : blog.content?.slice(0, 250) + "..."}
          </Typography>
          <Link to={currentUser ? `/blog/${blog.id}` : "/login"}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<SendIcon />}
            >
              View Blog
            </Button>
          </Link>
        </CardContent>
        <CardContent
          style={{
            display: "flex",
            fontSize: 20,
          }}
        >
          <AccountCircleIcon />
          {blog.author}
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
  );
};

export default BlogCards;
