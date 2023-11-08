import { Box } from "@mui/material";
import { appContainer } from "App/index.styles";
import React, { type FC } from "react";

interface IApp {}

const App: FC<IApp> = () => {
  console.log("App");

  return <Box sx={appContainer}></Box>;
};

export default App;
