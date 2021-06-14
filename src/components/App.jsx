import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import JSONResult from "../data.json";
import Header from "./common/Header";
import Detail from "./Detail";
import Profile from "./Profile";
const App = () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setData(JSONResult.data);
    setProfile(JSONResult.profile);
  }, []);

  return (
    <div>
      <Router>
        <Header profileName={profile.firstName} />
        <Switch>
          <Route
            path="/detail/:title/:mag/:time/:status/:tsunami/:type"
            component={Detail}
          />
          <Route
            path="/profile"
            component={() => <Profile profile={profile} />}
          />
          <Route path="*" component={() => <Home data={data} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
