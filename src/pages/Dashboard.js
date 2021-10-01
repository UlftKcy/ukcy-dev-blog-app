import Header from "../components/Header";
import BlogCards from "../components/BlogCards";
import { useFetch } from "../utils/functions";
import { Container, Grid, Typography, Box, CircularProgress } from "@material-ui/core";

const Dashboard = () => {
  const { blogCardList, isLoading } = useFetch();
  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container style={{ padding: 30 }} sx={{ flexGrow: 1 }}>
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
            ) : blogCardList?.length === 0 ? (
              <Grid item>
                <Typography>Nothing Found!</Typography>
              </Grid>
            ) : (
              blogCardList?.map((card, id) => (
                <BlogCards key={id} card={card} />
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
