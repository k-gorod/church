import React, {
  useMemo,
  type FC,
  useState,
  useEffect,
  MutableRefObject,
} from "react";
import { SlideLiskov } from "types";

export interface ISlide {
  status: number;
  data: {
    src: string;
    text: string;
  };
  offsetNumber: number;
  SlideComponent: FC<SlideLiskov>;
}

const Slide: FC<ISlide> = ({ status, data, offsetNumber, SlideComponent }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const transition = useMemo(() => {
    switch (status) {
      case 0:
        return {
          transform: `scale(1) translateX(calc(${
            status * 300 + offsetNumber
          }px - 50%))`,
          zIndex: 2,
        };
      case -1:
        return {
          opacity: ".5",
          transform: `scale(.6) translateX(calc(${status * 200}px - 115%))`,
          zIndex: 1,
        };
      case 1:
        return {
          opacity: ".5",
          transform: `scale(.6) translateX(calc(${status * 200}px - 50%))`,
          zIndex: 1,
        };
      default:
        return {
          opacity: 0,
          transform: `scale(.6) translateX(${status * 200}px)`,
        };
    }
  }, [status, offsetNumber]);

  /**
   * @description Optimization to do not render extra slides
   */
  useEffect(() => {
    if ([-2, -1, 0, 1, 2].some((el) => status === el)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [status]);

  return isVisible ? (
    <SlideComponent
      data={{ ...data, isActive: status === 0 }}
      transition={transition}
    />
  ) : null;
};

export default Slide;
