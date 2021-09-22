import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import { useFetch } from "../functions/functions";

const BlogCards = () => {
  const { blogCardList, isLoading } = useFetch();
  const { cards } = useContext(AuthContext);
  const { setSelectedCard } = useContext(AuthContext);

  const handleClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={8}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          {cards.map((card) => {
            const { id, title, image, content } = card;
            return (
              <Grid key={id} item>
                <Link to={`/blog/${id}`} onClick={() => handleClick(card)}>
                  <Card
                    fluid
                    style={{
                      maxWidth: "350px",
                      minHeight: "100%",
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
                    <CardActions>
                      <Button size="small">
                        <FavoriteBorderOutlinedIcon />
                      </Button>
                      <Button size="small">
                        <ModeCommentOutlinedIcon />
                      </Button>
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
