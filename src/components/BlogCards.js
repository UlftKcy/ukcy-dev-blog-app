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
  Box,
  CircularProgress,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useFetch } from "../functions/functions";

const BlogCards = () => {
  const { blogCardList, isLoading } = useFetch();
  const { setSelectedCard, currentUser } = useContext(AuthContext);

  const handleClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          {isLoading ? (
            <Grid item>
              <Typography>
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </Typography>
            </Grid>
          ) : blogCardList.length === 0 ? (
            <Grid item>
              <Typography>Nothing Found!</Typography>
            </Grid>
          ) : (
            blogCardList.map((card) => (
              <Grid key={card.id} item>
                <Link
                  to={currentUser ? `/blog/${card.id}` : "/login"}
                  onClick={() => handleClick(card)}
                >
                  <Card
                    style={{
                      maxWidth: 345,
                      minHeight: "100%",
                      display: "grid",
                    }}
                  >
                    <CardHeader
                      style={{
                        backgroundImage:
                          "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
                      }}
                      title={card.title}
                      subheader="September 24, 2021"
                    />
                    <CardMedia
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      image={card.image}
                      component="img"
                      alt={card.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {card.content?.length < 250
                          ? card.content
                          : card.content?.slice(0, 250) + "..."}
                      </Typography>
                    </CardContent>
                    <CardContent
                      style={{
                        display: "flex",
                        fontSize: 20,
                        marginBottom: 5,
                      }}
                    >
                      {currentUser ? <AccountCircleIcon /> : ""}
                      {currentUser?.email}
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
                </Link>
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogCards;
