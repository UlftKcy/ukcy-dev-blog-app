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
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const BlogDetail = () => {
  const { selectedCard } = useContext(AuthContext);
  const { title, image, content } = selectedCard;
  console.log(selectedCard);
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={8}>
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
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BlogDetail;
