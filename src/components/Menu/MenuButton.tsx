import { AppStateContext } from "context/AppState";
import React, { useContext, useEffect, type FC } from "react";

interface IMenuButton {}

const MenuButton: FC<IMenuButton> = () => {
  const { menuIsActive, setMenuIsActive } = useContext(AppStateContext);

  const onButtonClick = () => {
    setMenuIsActive?.((prev) => !prev);
  };

  useEffect(() => {
    console.log(menuIsActive);
  }, [menuIsActive]);

  return (
    <div className="app_menu_button" onClick={onButtonClick}>
      <div className="app_menu_button_wrapper button_wrapper">
        {[1, 2, 3].map((el) => (
          <div
            key={`${el}-burger-line`}
            className={`app_menu_button_line button_line${el} ${
              menuIsActive ? `button_line${el}-active` : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuButton;
