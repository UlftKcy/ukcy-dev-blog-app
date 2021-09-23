import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewBlog from "../pages/NewBlog";
import BlogDetail from "../pages/BlogDetail";
import UpdateBlog from "../pages/UpdateBlog";
import Profile from "../pages/Profile";

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
        <Route path="/updateBlog" component={UpdateBlog} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
