import SidebarItem from "components/Menu/SidebarItem";
import { menuItems } from "components/Menu/index.config";
import { AppStateContext, VariansOfBlocks } from "context/AppState";
import React, { useContext, type FC, useEffect } from "react";

interface IMenuSidebar {}

const MenuSidebar: FC<IMenuSidebar> = () => {
  const { menuIsActive } = useContext(AppStateContext);

  return (
    <div
      className={`app_menu_sidebar sidebar ${
        menuIsActive ? "sidebar-active" : ""
      }`}
    >
      <div className="app_menu_sidebar_content sidebar_content">
        {menuItems.map((el, i) => (
          <SidebarItem data={el} key={`${i}-sidebar_content_item`} />
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;
