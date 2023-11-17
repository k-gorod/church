import BackgroundVideo from "components/BackgroundVideo";
import React, { useRef, type FC, useEffect } from "react";
import video from "../../assets/background.mp4";

import "./index.scss";
import { useAnim } from "anim-react";
import { getBlockPosition } from "hooks/getBlockPosition";

interface IFirstBlock {}

const FirstBlock: FC<IFirstBlock> = () => {
  const titleRef = useRef(null);
  const pRef = useRef(null);
  const firstBlockRef = useRef(null);

  useAnim({
    ref: titleRef,
    animName: "slideFromTop",
    userConfig: {
      startInSight: true,
    },
  });

  useAnim({
    ref: pRef,
    animName: "slideFromBottom",
    userConfig: {
      startInSight: true,
    },
  });

  getBlockPosition("firstBlock", firstBlockRef);

  return (
    <div ref={firstBlockRef} className="app_block app_block_firstBlock">
      <BackgroundVideo src={video} />
      <div className="app_block_firstBlock_textPart">
        <h1 ref={titleRef} className="app_block_firstBlock_title">
          Свет Миру
        </h1>
        <p ref={pRef} className="app_block_firstBlock_desc">
          Опять говорил Иисус к народу и сказал им: Я свет миру; кто последует
          за Мною, тот не будет ходить во тьме, но будет иметь свет жизни.
          <br />
          <span>От Иоанна 8:12</span>
        </p>
      </div>
    </div>
  );
};

export default FirstBlock;
