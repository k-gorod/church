import React, { useRef, type FC } from "react";
import image from "../../assets/light-up.jpg";

import BlockHeading from "components/BlockHeading";

import { useAnim } from "anim-react";
import Slider from "components/Slider";

import "./index.scss";

interface IAboutUs {}

const fakeSlides = Array(10).fill({ text: "Helllo", src: image });

const AboutUs: FC<IAboutUs> = () => {
  const ref = useRef(null);

  useAnim({
    ref: ref,
    animName: "slideFromBottom",
    userConfig: {
      startInSight: true,
    },
  });

  return (
    <div className="app_block app_block_aboutUs">
      <div className="app_block_aboutUs_wrapper aboutUs_wrapper">
        <div ref={ref}>
          <BlockHeading>О нас</BlockHeading>
          <p>
            Христианская церковь полного Евангелия "Свет Миру", двери которой
            более двадцати лет открыты для каждого, желающего окунуться в
            атмосферу Божьей любви и принятия.
          </p>
        </div>
        <Slider slides={fakeSlides} />
      </div>
    </div>
  );
};

export default AboutUs;
