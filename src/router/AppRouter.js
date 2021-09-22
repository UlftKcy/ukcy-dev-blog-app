import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Container } from "@material-ui/core";
import NewBlog from "../pages/NewBlog";
import BlogDetail from "../pages/BlogDetail";

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: red[500],
    },
  },
});

const useStylesWrapper = makeStyles({
  wrapper: {
    width: "100vw",
    height: "auto",
  },
});

const AppRouter = () => {
  const classes = useStylesWrapper();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.wrapper}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newblog" component={NewBlog} />
            <Route path="/blog/:blogId" component={BlogDetail} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};
export default AppRouter;
