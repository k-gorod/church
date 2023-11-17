import React, { type FC } from "react";
import { SlideLiskov } from "types";

import "./index.scss";

interface IChurchMinistrySlide extends SlideLiskov {}

const ChurchMinistrySlide: FC<IChurchMinistrySlide> = ({
  data,
  transition,
}) => {
  return (
    <div
      className="app_slider_slide slider_slide slider_slide_ministry"
      style={{
        background: `center / cover url(${data.src})`,
        ...(transition || {}),
      }}
    >
      <div className="slider_slide_ministry_text_wrapper">
        <div className="slider_slide_ministry_shade">
          <p className="slider_slide_ministry_text">{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChurchMinistrySlide;
