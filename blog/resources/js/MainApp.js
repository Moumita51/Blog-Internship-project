import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./views/Home";
import LatestBlogs from "./views/LatestBlogs";
import TopBlogs from "./views/TopBlogs";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Contact from "./component/contact";
import BlogPost from "./component/BlogPost";
import Category from "./views/Category";
import BlogShow from "./views/BlogShow";
import NotFoundPage from "./component/NotFoundPage";

const MainApp = () => {
    return (
        <Router>
            <Header />

            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/latest" exact={true} component={LatestBlogs}/>
                <Route path="/top" exact={true} component={TopBlogs}/>
                <Route path="/signin" exact={true} component={SignIn}/>
                <Route path="/register" exact={true} component={SignUp}/>
                <Route path="/contact" exact={true} exact={true} component={Contact}/>
                <Route path="/addblog" exact={true} component={BlogPost}/>
                <Route path="/category/:category/:id" exact={true} component={BlogShow}/>
                <Route path="/category/:category" exact={true} render={routeProps => (<Category {...routeProps}/>)}/>
                <Route component={NotFoundPage} />
            </Switch>

            <Footer />
        </Router>
    );
};

export default MainApp;

if (document.getElementById("app")) {
    ReactDOM.render(<MainApp />, document.getElementById("app"));
}
