import React, { ReactNode, type FC } from "react";

import "./index.scss";

interface ISocialBage {
  icon: ReactNode;
  text: string;
  url: string;
}

const SocialBage: FC<ISocialBage> = ({ icon, text, url }) => {
  return (
    <a className="socialBage" href={url}>
      {icon}
      <p className="socialBage_text">{text}</p>
    </a>
  );
};

export default SocialBage;
