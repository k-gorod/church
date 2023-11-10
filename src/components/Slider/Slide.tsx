import React, { useMemo, type FC } from "react";

export interface ISlide {
  status: number;
  data: {
    src: string;
    text: string;
  };
  offsetNumber: number;
}

const Slide: FC<ISlide> = ({ status, data, offsetNumber }) => {
  const transition = useMemo(() => {
    switch (status) {
      case 0:
        return {
          transform: `scale(1) translateX(${status * 300 + offsetNumber}px)`,
          zIndex: 2,
        };
      case -1:
        return {
          opacity: ".5",
          transform: `scale(.6) translateX(${status * 300}px)`,
          zIndex: 1,
        };
      case 1:
        return {
          opacity: ".5",
          transform: `scale(.6) translateX(${status * 300}px)`,
          zIndex: 1,
        };
      default:
        return {
          opacity: 0,
          transform: `scale(.6) translateX(${status * 300}px)`,
        };
    }
  }, [status, offsetNumber]);

  return (
    <div
      className="app_slider_slide slider_slide"
      style={{ background: `center / cover url(${data.src})`, ...transition }}
    >
      {data.text}
    </div>
  );
};

export default Slide;
