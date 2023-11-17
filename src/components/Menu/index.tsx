import MenuButton from "components/Menu/MenuButton";
import MenuSidebar from "components/Menu/MenuSidebar";
import React, { type FC } from "react";

import "./index.scss";
import Shadow from "components/Menu/Shadow";

interface IMenu {}

const Menu: FC<IMenu> = () => {
  return (
    <div className="app_menu">
      <MenuButton />
      <MenuSidebar />
      <Shadow />
    </div>
  );
};

export default Menu;
