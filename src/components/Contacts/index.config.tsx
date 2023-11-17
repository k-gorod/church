import React, { ReactNode } from "react";
import Telegram from "icons/Telegram";
import Instagram from "icons/Instagram";
import YouTube from "icons/YouTube";
import Viber from "icons/Viber";

export const socials: { icon: ReactNode; text: string; url: string }[] = [
  {
    icon: <Telegram />,
    text: "Telegram",
    url: "https://t.me/Olegus76",
  },
  {
    icon: <Instagram />,
    text: "Family Fest",
    url: "https://www.instagram.com/family_fest2023",
  },
  {
    icon: <Instagram />,
    text: "Light Up",
    url: "https://www.instagram.com/lightup_minsk/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==",
  },
  {
    icon: <YouTube />,
    text: "YouTube",
    url: "https://youtube.com/@church.l-w?si=OyG2UZBBn31WFXq4",
  },
  {
    icon: <Viber />,
    text: "Viber",
    url: "viber://chat?number=375296515179",
  },
];
{
  /* <a href="viber://pa?chatURI=[public account URI]&text=[message text]"></a>; */
}
