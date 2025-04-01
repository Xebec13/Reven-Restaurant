import React from "react";
import "./App.css";

import { Nav, LandingPage } from "./components";

const App = () => (
  <>
    <div className="mainApp">
      <LandingPage />
      <Nav />
    </div>
  </>
);

export default App;
