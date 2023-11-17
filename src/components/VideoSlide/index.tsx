import React, { useCallback, type FC } from "react";
import { SlideLiskov } from "types";

import "./index.scss";

interface IVideoSlide extends SlideLiskov {}

const VideoSlide: FC<IVideoSlide> = ({ data, transition }) => {
  const onVideoSildeClick = useCallback(() => {
    if (!data?.url) return;

    console.log(data);

    const link = document.createElement("a");
    link.setAttribute("href", data.url);
    link.setAttribute("target", "_blank");

    link.click();
    link.remove();
  }, [data]);

  return (
    <>
      {data.isActive ? (
        <div
          className="slide_video_clickableArea"
          onClick={onVideoSildeClick}
        />
      ) : null}
      <iframe
        src={data.embed}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="app_slider_slide slider_slide slider_slide_video"
        style={{
          ...(transition || {}),
        }}
      ></iframe>
    </>
  );
};

export default VideoSlide;
