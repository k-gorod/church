import React, { type FC } from "react";

interface ITelegram {}

const Telegram: FC<ITelegram> = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="url(#paint0_linear_34411_836)"
      />
      <path
        d="M19.6 35C18.8225 35 18.9546 34.7064 18.6864 33.9661L16.4 26.4412L34 16"
        fill="#C8DAEA"
      />
      <path
        d="M19.6 34.9999C20.2 34.9999 20.4651 34.7255 20.8 34.3999L24 31.2883L20.0084 28.8813"
        fill="#A9C9DD"
      />
      <path
        d="M20.008 28.882L29.68 36.0278C30.7837 36.6368 31.5803 36.3215 31.8552 35.0031L35.7922 16.4505C36.1953 14.8344 35.1762 14.1015 34.1203 14.5808L11.0023 23.495C9.4243 24.128 9.4335 25.0084 10.7147 25.4006L16.6473 27.2523L30.3819 18.5873C31.0303 18.1941 31.6253 18.4055 31.1369 18.839"
        fill="url(#paint1_linear_34411_836)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_34411_836"
          x1="18.0024"
          y1="2.0016"
          x2="6.0024"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#37AEE2" />
          <stop offset="1" stopColor="#1E96C8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_34411_836"
          x1="20.9956"
          y1="25.4742"
          x2="23.56"
          y2="33.7692"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFF7FC" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Telegram;
