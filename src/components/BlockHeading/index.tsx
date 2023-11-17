import React, { ReactNode, type FC, useRef } from "react";

import "./index.scss";
import { useAnim } from "anim-react";

interface IBlockHeading {
  children: ReactNode;
}

const BlockHeading: FC<IBlockHeading> = ({ children }) => {
  const ref = useRef(null);

  useAnim({
    ref,
    animName: "slideFromBottom",
    userConfig: {
      startInSight: true,
    },
  });

  return (
    <h2 className="blockHeading" ref={ref}>
      {children}
    </h2>
  );
};

export default BlockHeading;
