import Header from "../components/Header";
import BlogCards from "../components/BlogCards";
import { Container } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <BlogCards />
    </Container>
  );
};
export default Dashboard;
