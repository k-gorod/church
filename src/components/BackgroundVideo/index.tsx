import React, { type FC } from "react";

import "./index.scss";
import { Box } from "@mui/material";

interface IBackgroundVideo {
  src: string;
}

const BackgroundVideo: FC<IBackgroundVideo> = ({ src }) => {
  return (
    <div className="backgroundVideo_wrapper">
      <video className="backgroundVideo_video" autoPlay loop muted src={src} />
    </div>
  );
};

export default BackgroundVideo;
