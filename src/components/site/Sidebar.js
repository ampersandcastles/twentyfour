import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Nasa from "../apps/nasa/nasa";
// import Tm from "../apps/ticketMaster/ticketMaster";
// import Owm from "../apps/openWeather/openWeather";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/nasa">NASA</Link>
          </li>
          <li>
            <Link to="/owm">Open Weather Map</Link>
          </li>
          <li>
            <Link to="/tm">Ticket Master</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/nasa">
            <Nasa />
          </Route>
          <Route exact path="/owm">
            <Owm />
          </Route>
          <Route exact path="/tm">
            <Tm />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
