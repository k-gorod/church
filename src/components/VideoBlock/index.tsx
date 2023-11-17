import React, { useRef, type FC } from "react";

import "./index.scss";
import BlockHeading from "components/BlockHeading";
import { getBlockPosition } from "hooks/getBlockPosition";
import { videosData } from "components/VideoBlock/index.config";
import VideoSlide from "components/VideoSlide";
import Slider from "components/Slider";

interface IVideoBlock {}

const VideoBlock: FC<IVideoBlock> = () => {
  const videoBlockRef = useRef(null);

  getBlockPosition("videoBlock", videoBlockRef);

  return (
    <div ref={videoBlockRef} className="app_block app_block_videoBlock">
      <BlockHeading> Проповеди</BlockHeading>
      <Slider
        className="aboutUs_slider_video"
        slides={videosData}
        SlideComponent={VideoSlide}
      />
    </div>
  );
};

export default VideoBlock;
