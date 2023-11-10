import React, { ReactNode, type FC } from "react";

import "./index.scss";

interface IBlockHeading {
  children: ReactNode;
}

const BlockHeading: FC<IBlockHeading> = ({ children }) => {
  return <h2 className="blockHeading">{children}</h2>;
};

export default BlockHeading;
