import React, { useRef, type FC, useEffect } from "react";

import BlockHeading from "components/BlockHeading";

import { useAnim } from "anim-react";
import Slider from "components/Slider";

import "./index.scss";
import { getBlockPosition } from "hooks/getBlockPosition";
import ChurchMinistrySlide from "components/ChurchMinistrySlide";
import { aboutUsSlides } from "components/AboutUs/index.config";

interface IAboutUs {}

const AboutUs: FC<IAboutUs> = () => {
  const refP = useRef(null);
  const aboutUsBlockRef = useRef(null);

  useAnim({
    ref: refP,
    animName: "slideFromBottom",
    userConfig: {
      startInSight: true,
    },
  });

  getBlockPosition("aboutBlock", aboutUsBlockRef);

  return (
    <div ref={aboutUsBlockRef} className="app_block app_block_aboutUs">
      <div className="app_block_aboutUs_wrapper aboutUs_wrapper">
        <div>
          <BlockHeading>О нас</BlockHeading>
          <p ref={refP} className="app_block_aboutUs_text">
            Христианская церковь полного Евангелия "Свет Миру", двери которой
            более двадцати лет открыты для каждого, желающего окунуться в
            атмосферу Божьей любви и принятия.
          </p>
        </div>
        <Slider
          className="aboutUs_slider_ministry"
          slides={aboutUsSlides}
          SlideComponent={ChurchMinistrySlide}
        />
      </div>
    </div>
  );
};

export default AboutUs;
