import React, { type FC } from "react";

import "./index.scss";

interface IBackgroundVideo {
  src: string;
}

const BackgroundVideo: FC<IBackgroundVideo> = ({ src }) => {
  return (
    <div className="backgroundVideo_wrapper" style={{ zIndex: -2 }}>
      <video
        className="backgroundVideo_video"
        autoPlay
        playsInline // to autoplay on ios
        loop
        muted
        src={src}
      />
    </div>
  );
};

export default BackgroundVideo;
