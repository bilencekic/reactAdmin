import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/users" component={UserList} exact />
            <Route path="/user/:userId" component={User} exact />
          </Switch>
   
        </div>
    </Router>
  );
}

export default App;
