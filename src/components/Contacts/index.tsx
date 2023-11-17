import React, { useRef, type FC } from "react";
import image from "../../assets/pastor.jpeg";
import BlockHeading from "components/BlockHeading";
import Telegram from "icons/Telegram";
import YouTube from "icons/YouTube";

import "./index.scss";
import { getBlockPosition } from "hooks/getBlockPosition";
import SocialBage from "components/SocialBage";
import { socials } from "components/Contacts/index.config";

interface IContacts {}

const Contacts: FC<IContacts> = () => {
  const pastorRef = useRef(null);

  const contactsBlockRef = useRef(null);

  getBlockPosition("contactsBlock", contactsBlockRef);

  return (
    <div ref={contactsBlockRef} className="app_block app_block_contacts">
      <BlockHeading>Контакты</BlockHeading>
      <div className="contacts_wrapper">
        <div className="contacts_coordinates">
          <a href="tel:+375296515179" className="app_block_contacts_link">
            +375 (29) 651-51-79
          </a>
          <a
            target="_blank"
            // href="https://maps.app.goo.gl/gm8tZTb57uhoaWVh7"
            href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%A1%D0%B2%D0%B5%D1%82+%D0%9C%D0%B8%D1%80%D1%83/@53.8946584,27.4671454,17.79z/data=!4m6!3m5!1s0x46dbdac8208a7fc7:0xffbb73b7c7c1eed8!8m2!3d53.8946232!4d27.4677792!16s%2Fg%2F11dxd4yxyg?entry=ttu"
            className="app_block_contacts_link"
          >
            г.Минск, ул.Медвежино 11/3
          </a>
        </div>

        <div
          ref={pastorRef}
          className="app_block_contacts_pastor contacts_pastor"
        >
          <div>
            <div
              className="app_block_contacts_pastor_image"
              style={{ background: `center / cover url(${image})` }}
            ></div>
            <p className="app_block_contacts_pastor_text">Олег Козлов</p>
            <p className="app_block_contacts_pastor_text_underline">
              {" "}
              Пастор Церкви
            </p>
          </div>
        </div>
        <div className="contacts_socials">
          {socials.map(({ icon, text, url }) => (
            <SocialBage icon={icon} text={text} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
