import { AppStateContext, VariansOfBlocks } from "context/AppState";
import React, { useContext, type FC, useState } from "react";

interface ISidebarItem {
  data: {
    id: VariansOfBlocks;
    text: string;
  };
}

const SidebarItem: FC<ISidebarItem> = ({ data }) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  const { menuIsActive, blockStartPoint, setMenuIsActive } =
    useContext(AppStateContext);

  const onMenuItemClick = (itemId: VariansOfBlocks) => {
    setMenuIsActive?.(false);

    document.getElementsByTagName("html")[0].scrollTo({
      top: blockStartPoint?.[itemId],
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => onMenuItemClick(data.id)}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className={`sidebar_content_item ${
        mouseOver ? "sidebar_content_item-active" : ""
      }`}
    >
      {data.text}
      <div
        className={`sidebar_content_item_underline ${
          mouseOver ? "sidebar_content_item_underline-active" : ""
        }`}
      />
    </div>
  );
};

export default SidebarItem;
