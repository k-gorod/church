import React, { type FC } from "react";

import FirstBlock from "components/FirstBlock";
import AboutUs from "components/AboutUs";

import "./index.scss";

interface IApp {}

const App: FC<IApp> = () => {
  return (
    <div className="app">
      <div className="app_wrapper">
        <FirstBlock />
        <AboutUs />
        <div style={{ height: "100dvh" }}></div>
      </div>
    </div>
  );
};

export default App;
