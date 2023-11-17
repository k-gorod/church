import React, { useEffect, type FC } from "react";

import FirstBlock from "components/FirstBlock";
import AboutUs from "components/AboutUs";

import "./index.scss";
import Contacts from "components/Contacts";
import VideoBlock from "components/VideoBlock";
import Menu from "components/Menu";
import BackgroundVideo from "components/BackgroundVideo";
import { initializeFavIcon } from "utils";

interface IApp {}

const App: FC<IApp> = () => {
  useEffect(() => {
    initializeFavIcon();
  }, []);

  return (
    <div className="app">
      <Menu />
      <div className="app_wrapper">
        <FirstBlock />
        <AboutUs />
        <VideoBlock />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
