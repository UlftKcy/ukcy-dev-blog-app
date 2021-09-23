import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import BlogDetail from "../pages/BlogDetail";

const AppRouter = () => {
  return (
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
  );
};
export default AppRouter;
