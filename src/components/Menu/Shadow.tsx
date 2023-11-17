import { AppStateContext } from "context/AppState";
import React, { useContext, type FC, useEffect } from "react";

interface IShadow {}

const Shadow: FC<IShadow> = () => {
  const { menuIsActive, setMenuIsActive } = useContext(AppStateContext);

  const onShadowClick = () => {
    setMenuIsActive?.((prev) => !prev);
  };

  useEffect(() => {
    if (menuIsActive) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "overflow:hidden");
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("style");
    }
  }, [menuIsActive]);

  return (
    <div
      onClick={onShadowClick}
      className={`app_shadow ${menuIsActive ? "app_shadow-visible" : ""}`}
    ></div>
  );
};

export default Shadow;
