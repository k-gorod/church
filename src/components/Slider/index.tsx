import Slide, { ISlide } from "components/Slider/Slide";
import React, { useState, type FC, useEffect, useRef } from "react";
import "./index.scss";
import { useAnim } from "anim-react";
import { blindSwape } from "components/Slider/index.config";

interface ISlider {
  slides: { src: string; text: string }[];
}

const Slider: FC<ISlider> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [offset, setOffset] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useAnim({
    ref: ref,
    animName: "slideFromBottom",
    userConfig: {
      startInSight: true,
    },
  });

  const onSliderClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const { left, right } = rect;

    setCurrentSlide((prev) => {
      if (e.clientX < left || e.clientX > right) {
        if (e.clientX < window.innerWidth / 2) {
          return prev === 0 ? 0 : prev - 1;
        } else {
          return prev === slides.length - 1 ? slides.length - 1 : prev + 1;
        }
      } else {
        return prev;
      }
    });
  };

  const onSliderTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };
  const onSliderTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.changedTouches[0].clientX || !touchStart) return;

    setOffset(0);

    setCurrentSlide((prev) => {
      if (touchStart + blindSwape < e.changedTouches[0].clientX) {
        return prev === 0 ? 0 : prev - 1;
      } else if (touchStart - blindSwape > e.changedTouches[0].clientX) {
        return prev === slides.length - 1 ? slides.length - 1 : prev + 1;
      } else {
        return prev;
      }
    });
  };

  const touchSliderTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const offset = e.touches[0].clientX - touchStart;

    setOffset(() => {
      if (offset > 0) {
        return offset > blindSwape ? 100 : 0;
      } else {
        return offset < -blindSwape ? -100 : 0;
      }
    });
  };

  return (
    <div
      ref={ref}
      className="app_slider"
      onClick={onSliderClick}
      onTouchStart={onSliderTouchStart}
      onTouchEnd={onSliderTouchEnd}
      onTouchMove={touchSliderTouchMove}
    >
      {slides.map((el, i) => (
        <Slide
          key={`${i}-componentSlide`}
          status={i - currentSlide}
          data={el}
          offsetNumber={offset}
        />
      ))}
    </div>
  );
};

export default Slider;
