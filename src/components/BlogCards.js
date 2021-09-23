import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useFetch } from "../functions/functions";

const BlogCards = () => {
  const { blogCardList } = useFetch();
  const { setSelectedCard, currentUser } = useContext(AuthContext);

  const handleClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={8}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          {blogCardList.map((card) => {
            const { id, title, image, content } = card;
            return (
              <Grid key={id} item>
                <Link
                  to={currentUser ? `/blog/${id}` : "/login"}
                  onClick={() => handleClick(card)}
                >
                  <Card
                    fluid
                    style={{
                      maxWidth: "350px",
                      minHeight: "100%",
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
                        {content.length < 250
                          ? content
                          : content.slice(0, 250) + "..."}
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
                      {currentUser?.email}
                    </CardContent>
                    <CardActions
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button size="small">
                        <FavoriteBorderOutlinedIcon />
                      </Button>
                      <Button size="small">
                        <ModeCommentOutlinedIcon />
                      </Button>
                      <Typography>Sep 21, 2021</Typography>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogCards;
